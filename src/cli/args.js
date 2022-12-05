const parseArgs = () => {    
    const command_line_arguments = process.argv;
    let arr = [];

    for (let elem = 0; elem < command_line_arguments.length; elem++) {
        if (command_line_arguments[elem].slice(0, 2) === '--') {
            arr.push((command_line_arguments[elem]).slice(2) + ' is ' + command_line_arguments[elem + 1]);
        }
    }
    console.log(arr.join(', '));
};

parseArgs();