export type Response = {
    url:string,
    fileName:string,
    value: 'screenshot' | 'wikiSummary',
}

const logResponses = (data : Response):void  => {
    console.log('log function ',  data);
};

export default logResponses;