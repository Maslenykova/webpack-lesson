import { createLogger } from "../logger.js";

it('should return stored logs' , () =>{
    const logger = createLogger('user login');
    expect(logger.getLogs()).toEqual([]);
});

it('should return stored logs' , () =>{
    const logger = createLogger('user login');
    logger.log('login success');
    expect(logger.getLogs()).toEqual(['log - user login - login success']);
});

it('should save error' , () =>{
    const logger = createLogger('user login');
    logger.error ('login failed');
    expect(logger.getLogs()).toEqual(['log - user login - login failed']);
});