module.exports = {
    apps : [{
        script : './index.js',
        instances : '2',
        exec_mode : 'cluster'
    }]
}