//adding the date at the top
var currentTime= moment();
$("#currentDay").text(currentTime.format("MMM Do, YYYY"));

//TODO: add local storage to save info 
const LS = JSON.parse(localStorage.scheduler || '{}');


function clock() {
	$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
	}
	
	setInterval(clock, 1000);
	
	var buttonEl = $(".saveBtn");
	var DescripEl = $(".description");
	
	//check the time to change the background color
	function checkTime() {
	//get current time
	var currentTime = moment().hours();
	// var currentTime = 14; testing
	console.log(currentTime);
	
	$(".time-block").each(function () {
	//make id into integar
	var timeBlock = parseInt($(this).attr("id"));
	console.log(timeBlock);
	
	if (currentTime > timeBlock) {
	$(this).addClass("past");
	} else if (currentTime === timeBlock) {
	$(this).addClass("present");
	$(this).children("textarea").text("Current Time");
	} else {
	$(this).addClass("future");
	}
	})

//color changin background according to past (grey), present(red) and future(green)//
var hourPast = hourPast < currentTime;
var hourCurrent = currentTime;
var hourFuture = hourFuture > currentTime;
//If then statement here//

var hourCurrent = currentTime;
console.log(hourCurrent)
console.log(currentTime)
    function backgroundColor(){
        if (hourCurrent == currentTime){
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#present";
        }else if (hourCurrent < currentTime){
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#past";
        }else
        {
            document.getElementsByClassName("backgroundTool").style.backgroundColor = "#future";
        }
    }}