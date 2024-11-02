export const createLogger = (name) =>{
    const logs = [];

    return {
        log(message){
            logs.push(`log - ${name} - ${message}`);
        },
        error(errorText){
            ogs.push(`log - ${name} - ${errorText}`);
        },
        getLogs(){
            return logs;
        }
    }
}