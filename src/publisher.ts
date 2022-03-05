import amqp, { Connection, Channel } from "amqplib";

export default class Publisher {
  private connectionString: string;

  private conn: Connection | null = null;

  private ch: Channel | null = null;

  private defaultQueueOptions: amqp.Options.AssertQueue = { durable: true };

  private defaultMessageOptions: amqp.Options.Publish = {
    contentEncoding: "utf-8",
    contentType: "application/json",
    persistent: true,
    timestamp: Math.round((new Date()).getTime() / 1000),
  };

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  get connection(): Connection | null {
    return this.conn;
  }

  get channel(): Channel | null {
    return this.ch;
  }

  async connect(): Promise<void> {
    this.conn = await amqp.connect(this.connectionString);
    this.ch = await this.conn.createChannel();
  }

  async closeChannel(): Promise<void> {
    if (this.conn && this.ch) {
      await this.ch.close();
    }
  }

  async close(): Promise<void> {
    if (this.conn) {
      if (this.ch) {
        await this.closeChannel();
      }

      await this.conn.close();
    }
  }

  async send(queue: string, message: string, queueOpts: amqp.Options.AssertQueue = {}, messageOpts: amqp.Options.Publish = {}) {
    if (!this.conn || !this.ch) {
      throw new Error("No open connection");
    }

    await this.ch.assertQueue(queue, {
      ...this.defaultQueueOptions,
      ...queueOpts
    });

    this.ch.sendToQueue(queue, Buffer.from(message), {
      ...this.defaultMessageOptions,
      ...messageOpts
    });
  }
}
