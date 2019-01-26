function schedulingDenouncement(start, finish, end) {
  var i = 0;
  var longest = 0;
  while(i < start.length){
    if(finish[i] < start[i+1]){
      console.log("is good")
    }
    i++
  }
}

schedulingDenouncement([1, 2, 9, 3, 8], [5, 10, 17, 8, 15], 20)



/*

For start = [1, 5, 2], finish = [2, 9, 6] and end = 10,

  the output should be 3.

  -
  the first presentation should start at 1 and finish at 2.
Since no presentation has been scheduled so far, this time
is vacant, so the presentation is scheduled;

-
the second presentation should start at 5 and finish at 9.
Since it doesn 't interrupt the only scheduled presentation 
  (which is scheduled
    for the period[1, 2]), this presentation
is scheduled too;

-
the third presentation should start at 2 and finish at 6.
This presentation doesn 't interrupt the first first one,
which will be told from 1 to 2(they only intersect at the endpoints), but it does interrupt the second presentation
scheduled
for the period[5, 9](their intersection is the time interval[5, 6]).

So, the third presentation is rejected.

  -
  now, there are two time intervals available
for Matsaki:
  from 2 to 5(between the two scheduled presentations) and
from 9 to 10(after the second one).

Thus, the longest period is from 2 to 5, which is 3.

*/