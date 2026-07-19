function longestSubstring(text) {


    // Edge case
    if (!text || text.length === 0) {
        return {
            substring: "",
            length: 0
        };
    }



    let left = 0;

    let maxLength = 0;

    let longest = "";

    let charMap = {};



    for (let right = 0; right < text.length; right++) {


        let currentChar = text[right];



        // If character already exists in current window
        if (
            charMap[currentChar] !== undefined &&
            charMap[currentChar] >= left
        ) {

            left = charMap[currentChar] + 1;

        }



        // Store latest character position
        charMap[currentChar] = right;



        // Current window
        let currentSubstring = text.substring(
            left,
            right + 1
        );



        // Update maximum
        if (
            currentSubstring.length > maxLength
        ) {

            maxLength = currentSubstring.length;

            longest = currentSubstring;

        }

    }



    return {

        substring: longest,

        length: maxLength

    };

}


export default longestSubstring;