# AMQP

This library provides a shortcut for interacting with an AMQP-based message queue (RabbitMQ, for example).

## Getting Started

### Installation

```bash
npm i @clickheredigital/amqp
```

### Usage

```javascript
import { Publisher } from "./src";

(async () => {
  const pub: Publisher = new Publisher("amqp://localhost");

  try {
    // initialize the connection
    await pub.connect();

    // send a message to the AMQP message queue
    // the send function takes optional parameters `queueOpts` and `messageOpts`
    await pub.send("test", JSON.stringify({ message: "hello world" }));
  } catch (error) {
    console.error(error);
  } finally {
    // close the connection
    await pub.close();
  }
})();
```