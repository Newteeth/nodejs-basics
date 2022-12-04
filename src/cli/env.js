const parseEnv = () => {
    const object_variable_environment = process.env;
    let arr = [];
    Object.keys(object_variable_environment).forEach(function(element) {
        if (element.slice(0, 4) === 'RSS_') {
            arr.push(element + '=' + object_variable_environment[element]);
        }
    });
    console.log(arr.join('; '));
}

parseEnv();