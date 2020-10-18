const dev = process.env.NODE_ENV === 'dev';

const config = {
    jwtSecret: "test",
    dev,
    port: dev ? 3000: 8000,
}

export default config;