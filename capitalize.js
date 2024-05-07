function capitalizeFirstLetter(phrase) {

    const words = phrase.toLowerCase().split(" ")

    for(i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(' ')

}


module.exports = capitalizeFirstLetter;
