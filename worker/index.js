const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
  console.log(`📩 Received: ${message}`);
  try {
    const result = fib(parseInt(message));
    redisClient.hset('values', message, result, (err) => {
      if (err) console.error("❌ Redis Write Error:", err);
      else console.log(`✅ Saved fib(${message}) = ${result}`);
    });
  } catch (error) {
    console.error("❌ Error processing message:", error);
  }
});

sub.subscribe('insert', (err) => {
  if (err) console.error("❌ Subscription error:", err);
  else console.log(`✅ Subscribed to insert`);
});
