
var imageArray = [
    "https://www.what-dog.net/Images/faces2/scroll0015.jpg", 
    "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5ruU23kzusycv7O8a6O3aM7I8vwRdjP8tvShgOnArkC9Cbyqe",
    "http://wallpapers9.org/wp-content/uploads/2014/12/Christmas-Dog-Pictures-2.jpg",
    "http://www.cutestpaw.com/wp-content/uploads/2013/12/dog-Christmas.jpg"
];
var currentIndex = 0;

function renderImage(){
    if (currentIndex < 0) {
        currentIndix = imageArray.length - 1;
        } else if (currentIndex >= imageArray.length) {
        currentIndex = 0;
        }

$('#thePhoto').attr('src',imageArray[currentIndex]);
}
renderImage();

function forwardImage(){
    currentIndex++;
    renderImage();
}

function backImage(){
    currentIndex--;
    renderImage();
}

$('#forwardButton').on('click',forwardImage);
$('#backButton').on('click',backImage);  

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$('h1').html(outputString);


google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Dog Breed', 'Good boy level /10'],
          ['Dog 1',     10],
          ['Dog 2',      1],
          ['Dog 3',     15],
          ['Dog 4',      8],
          ['Dog 5',      2]
       
        ]);

          var chartWidth = $('body').width()*0.5;
          
          var options = {
          title: 'Percentage of food intake',
          backgroundColor: '#A60303',
          
          
          
          
          }
 

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }