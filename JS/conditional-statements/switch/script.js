let day = "prasad"
switch (day) {
	case "prasad":
		console.log("monday")
		break
	case 2:
		console.log("tuesday")
	case 3:
		console.log("wednesday")
		break
	case 4:
		console.log("thursday")
		break
	case 5:
		console.log("friday")
		break
	case 6:
		console.log("saturday")
		break
	case 7:
		console.log("sunday")
		break
	default:
		console.log("wrong input")
}

//task display a multiple choice question and ask user to enter answer based on the answer check correct or not using switch case


console.log("How many legs a rabbit have? A. 3 B. 2 c.5  D.9")
let answer = "A"
switch (answer)
{
    case 'A': console.log("right answer"); break;
    case 'B':console.log("wrong answer"); break;
    case 'C':console.log("wrong answer"); break;
    case 'D':console.log("wrong answer"); break;
        default:console.log("wrong input")
}
