/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let result = false;
    const arr = ['1XbeT now', 'free xxxxx'];
    arr.forEach( function( item, i, arr ) {

        if(str.toLowerCase().indexOf(item.toLowerCase()) >= 0) {
            result = true;
        }
    });
    return result;

}

