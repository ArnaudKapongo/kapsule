import { createClient } from 'redis'

const client = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  socket: {
    connectTimeout: 60000
  }
})

client.on('error', (err) => {
  console.error('Redis Client Error', err)
})

client.on('connect', () => {
  console.log('Connected to Redis')
})

export const redis = client

export const connectRedis = async () => {
  if (!client.isOpen) {
    await client.connect()
  }
  return client
}

export const disconnectRedis = async () => {
  if (client.isOpen) {
    await client.quit()
  }
}