let books = [
    "The Hobbit",
    "The Lord of the Rings",
    "The Silmarillion",
    "The Children of Hurin",
    "Unfinished Tales",
    "The History of Middle-earth",
    "The Book of Lost Tales",
    "The Book of Lost Tales Part Two",
    "The Lays of Beleriand",
    "The Shaping of Middle-earth",
    "the Lost Road and Other Writings"
]

// Ən uzun ada malik kitab
function maxNameBook() {
    let max = books[0].length
    for (let i = 0; i < books.length; i++) {
        if (max < books[i].length) {
            max = books[i].length
        }
    }

    for (let j = 0; j < books.length; j++) {
        if (books[j].length == max) {
            document.write(books[j])
        }
    }

}

//maxNameBook();



// Ən qisa ada malik kitab
function minNameBook() {
    let min = books[0].length
    for (let i = 0; i < books.length; i++) {
        if (min > books[i].length) {
            min = books[i].length
        }
    }

    for (let j = 0; j < books.length; j++) {
        if (books[j].length == min) {
            document.write(books[j])
        }
    }

}

//minNameBook();




// T hərfi ilə başlayan kitabları göstərin
function filterBooksName() {

    for (let i = 0; i < books.length; i++) {
        if (books[i][0] == "T" || books[i][0] == "t") {
            document.write("<br>" + books[i])
        }
    }
};

//filterBooksName();




// verilən array daxilində hasili ən böyük olan iki ədədi tapın.
let nums = [3, 4, 6, 12, 34, 67]

function multiplyLargestFirstAndSecondNumbers() {

    function getSecondLargestNumber(nums) {
        let largestNumber = nums[0]
        let secondLargest = nums[0]
        for (i = 0; i < nums.length; i++) {
            if (nums[i] > largestNumber) {
                secondLargest = largestNumber
                largestNumber = nums[i]

            } else if (nums[i] > secondLargest && nums[i] < largestNumber) {
                secondLargest = nums[i]
            }
        }
        return secondLargest;
    }

    function getFirstLargestNumber(nums) {
        let largestNumber = nums[0]
        for (i = 0; i < nums.length; i++) {
            if (largestNumber < nums[i]) {
                largestNumber = nums[i]
            }
        }
        return largestNumber;
    }

    let multiply = getSecondLargestNumber(nums) * getFirstLargestNumber(nums)
    document.write(multiply);
}

multiplyLargestFirstAndSecondNumbers()