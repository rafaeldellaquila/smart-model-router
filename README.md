# Smart Model Router Gateway

A project that implements a smart router gateway for AI models using OpenRouter.

## Description

This project provides a simple API gateway that routes chat requests to various AI models via the OpenRouter service. It allows for intelligent routing based on criteria like throughput, latency, or price, making it a "smart" router.

The gateway exposes a single `/chat` endpoint that accepts a question and returns a response from one of the configured models.

## Features

- **Fastify Server**: Lightweight and fast HTTP server for handling requests.
- **OpenRouter Integration**: Uses the OpenRouter SDK to access multiple AI models.
- **Configurable Routing**: Supports sorting models by throughput, latency, or price.
- **Environment-Based Config**: API keys and settings loaded from environment variables.
- **TypeScript**: Fully typed for better development experience.
- **E2E Tests**: Includes end-to-end tests for the routing functionality.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd 01-smart-model-router-gateway
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

## Usage

### Development

Run the server in development mode with hot reloading:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### API Endpoint

Send a POST request to `/chat` with a JSON body containing a `question`:

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "What is the capital of France?"}'
```

Response example:

```json
{
  "model": "arcee-ai/trinity-large-preview:free",
  "content": "The capital of France is Paris."
}
```

### Configuration

Edit `src/config.ts` to customize:

- Models to route to
- System prompt
- Temperature and max tokens
- Routing preferences (throughput, latency, price)

## Testing

Run the test suite:

```bash
npm test
```

For development with watching:

```bash
npm run test:dev
```

## Project Structure

- `src/config.ts`: Configuration settings and model definitions
- `src/index.ts`: Application entry point
- `src/openrouterService.ts`: Service for interacting with OpenRouter
- `src/server.ts`: Fastify server setup and routes
- `tests/`: End-to-end tests

## Dependencies

- `@openrouter/sdk`: SDK for OpenRouter API
- `fastify`: Web framework
- `@types/node`: TypeScript types for Node.js

## License

ISC
