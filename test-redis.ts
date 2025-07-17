import { connectRedis } from './server/utils/redis'

async function testRedis() {
  try {
    const client = await connectRedis()
    
    // Test ping
    const pong = await client.ping()
    console.log('Redis ping response:', pong)
    
    // Test set/get
    await client.set('test', 'Hello Redis!')
    const value = await client.get('test')
    console.log('Redis get response:', value)
    
    // Cleanup
    await client.del('test')
    
    console.log('✅ Redis connection test successful')
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Redis connection failed:', error.message)
    process.exit(1)
  }
}

testRedis()