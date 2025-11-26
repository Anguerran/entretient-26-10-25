// Assuming 'ioredis' is installed: npm install ioredis @types/ioredis
import Redis, { Redis as RedisClient } from "ioredis";

// Access Redis connection details from environment variables
const REDIS_HOST = process.env.REDIS_HOST || "localhost";
const REDIS_PORT = parseInt(process.env.REDIS_PORT || "6379", 10);

/**
 * Singleton class to manage the single, persistent Redis connection.
 */
class RedisService {
  private static instance: RedisService;
  private client: RedisClient;

  private constructor() {
    console.log(
      `[Redis] Attempting to connect to ${REDIS_HOST}:${REDIS_PORT}...`
    );

    // Configuration for ioredis client
    this.client = new Redis({
      host: REDIS_HOST,
      port: REDIS_PORT,
      // Custom strategy for automatic retries
      retryStrategy: (times: number) => {
        const delay = Math.min(times * 50, 2000);
        console.warn(`[Redis] Retrying connection #${times} in ${delay}ms...`);
        return delay;
      },
    });

    this.client.on("connect", () => {
      console.log(`[Redis] Successfully connected to cache server.`);
    });

    this.client.on("error", (err: Error) => {
      console.error("[Redis] Connection Error:", err.message);
    });
  }

  /** Gets the singleton instance. */
  public static getInstance(): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService();
    }
    return RedisService.instance;
  }

  /** Returns the raw client instance to ensure connection is established. */
  public getClient(): RedisClient {
    return this.client;
  }

  /** Sets a key with a Time-To-Live (TTL). */
  public async setWithTTL(
    key: string,
    value: string,
    ttlSeconds: number
  ): Promise<void> {
    // EX: Set the specified expire time, in seconds.
    await this.client.set(key, value, "EX", ttlSeconds);
  }

  /** Retrieves a value by key. */
  public async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }
}

// Export the ready-to-use singleton instance
export const redisService = RedisService.getInstance();
