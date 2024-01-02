import laporanAbsensiDebug from './laporanAbsensi.debug.js'
import chalk from 'chalk'

const debugList = [
    laporanAbsensiDebug
]

const debug = async () => {
    const results = []
    for (const d of debugList) {
        const res = await d()
        results.push(res)
    }
    console.log(chalk.bgBlue.bold('\nDebug Results:'))
    for (const r of results) {
        let msg = chalk.blue.underline.bold(r[0])
        if(r[1] == r[2]){
            msg += chalk.green(' PASS'+ ' (' + r[1] + '/' + r[2] + ')')
        }
        else{
            msg += chalk.red(' FAIL'+ ' (' + r[1] + '/' + r[2] + ')' )
        }
        console.log(msg)
    }
}

debug()
