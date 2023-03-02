
export default class ClassName {
    static async functionName(params: interFaceName){
        const value = params.value1

        return `this is a function in a class and this is just set up to pass linting for now ${value}`
    }

}

export interface interFaceName {
    value1?: string;
    value2?: string;
    value3?: string;
}
