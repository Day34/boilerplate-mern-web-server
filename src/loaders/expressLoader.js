import cors from 'cors';
import corsOptions from './config/cors'
import express from 'express';
import morgan from 'morgan';
import morganBody from 'morgan-body';
import timeout from 'connect-timeout';

export default app => {
    // CORS 설정
    app.use(cors(corsOptions));

    // Express 서버 로그 설정
    app.use(morgan('dev'));
    morganBody(app, {theme: 'inverted'});

    // 데이터 파싱 (QueryString, Params, Body) 설정
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // 타임 아웃 설정
    app.use(timeout('10s'));
};
