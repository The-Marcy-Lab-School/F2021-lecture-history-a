# Lesson: Sorting
 - `Array.prototype.sort(func)`

## Key Terms
* Insertion sort (worst)
 - scooting-down (shifting downing)
 - start from left to right, shifting the numbers down
 - the first part of our array gets sorted, and the rest is unsorted
 - Runtime is O(n^2) quadratic
 - In-place sort (mutates the array in place), space of O(1)
 
* Bubble sort (kinda close to the worst)
 - The largest elements bubble up at the end of the array 
 - sliding window two-by-two (comparing)
 - Every iteration, the next highest element is in the correct position
 - the last of our array gets sort and the rest is unsorted
 - Runtime is O(n^2) quadratic
 - In-place sort (mutates the array in place), space of O(1)

* Merge sort
- Recursion (divide and conquer)
- Split the array in half (until base care of single element)
- Build larger arrays from our already sorted arrays until we have sorted all elements in the original array 
- Runtime: is O(n log(n))
- Space: O(n) used to merge our subarrays together into our final array
- Space: O(log n) because of recursion (call stack)

* Quick sort (best)
- Recursion (pivot)
- Choose a pivot and swap it with the end element
- Group the rest of the element into two categories (smaller than pivot, and larger than pivot)
- Move the pivot to the correct index
- Recursively call for the elements to the left and to the right of the pivot
- In-place sort
- Runtime: O(n log(n))
- Space: O(log n) because of recursion (call stack)
 


What is the run time of sort: `O(n*log(n))`

## Essential Question
* What is the algorithm for insertion sort? bubble sort? merge sort? quick sort?
* What is the run-time complexity for insertion sort? bubble sort? merge sort? quick sort?
* What is the space complexity for insertion sort? bubble sort? merge sort? quick sort?