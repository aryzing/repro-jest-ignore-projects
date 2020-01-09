import {barOne, barTwo} from '@aryzing/bar-pkg';
import {fooOne} from '@aryzing/foo-pkg'

export const main = () => {
    fooOne()
    barOne()
    barTwo()

    const foo: string = "four";

    console.log("changee")
    console.log(foo)
    
    return 'main-mfe-1'
}

main()