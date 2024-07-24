const corsConfig = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  };

export default corsConfig;
