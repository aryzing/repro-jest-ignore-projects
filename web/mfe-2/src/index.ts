import {barOne, barTwo} from '@aryzing/bar-pkg'

export const main = () => {
    barOne()
    console.log(barTwo())
    return 'main-mfe-2'
}

main()