"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        console.log('🚀 Starting application...');
        console.log('📊 Environment:', process.env.NODE_ENV || 'development');
        console.log('🔗 Database URL:', process.env.DATABASE_URL ? '✅ Configured' : '❌ Missing');
        console.log('🌐 Frontend URL:', process.env.FRONTEND_URL || 'Not set');
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            logger: ['error', 'warn', 'log', 'debug'],
        });
        const allowedOrigins = [
            'http://localhost:4200',
            process.env.FRONTEND_URL || 'https://jp-3d-printer-shop.netlify.app'
        ];
        app.enableCors({
            origin: (origin, callback) => {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            credentials: true,
        });
        const port = process.env.PORT || 3000;
        await app.listen(port);
        console.log(`✅ Application is running on port ${port}`);
        console.log(`🔗 Health check: http://localhost:${port}/health`);
    }
    catch (error) {
        console.error('❌ Failed to start application:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map