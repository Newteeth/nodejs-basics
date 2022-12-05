const parseArgs = () => {    
    const command_line_arguments = process.argv;

    for (let elem = 0; elem < command_line_arguments.length; elem++) {
        if (command_line_arguments[elem].slice(0, 2) === '--') {
            console.log(command_line_arguments[elem] + ' is ' + command_line_arguments[elem + 1]);
        }
    }
};

parseArgs();