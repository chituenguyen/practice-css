// define package name
package main

// import files package
import (
	"fmt"
)

// function
func main() {

	// function made avalable in fmt
	fmt.Println("Hello world!")
}

// type : int, float32, string, bool
// declare using var keyword, :=

func typelearn() {
	var student1 string = "John" //type is string
	var student2 = "Jane"        //type is inferred
	x := 2                       //type is inferred

	fmt.Println(student1)
	fmt.Println(student2)
	fmt.Println(x)
}

// type constraints using const

// output having three : Print() Println() Printf()

// array
func arraylearn() {
	var arr1 = [3]int{1, 2, 3}
	arr2 := [5]int{4, 5, 6, 7, 8}

	fmt.Println(arr1)
	fmt.Println(arr2)
}

// without define length of array
//   var arr1 = [...]int{1,2,3}
//   arr2 := [...]int{4,5,6,7,8}

// loop
func looplearn() {
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}
}
