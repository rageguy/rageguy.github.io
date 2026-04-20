window.onload = function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('oct,07,2017,16:00:00'); // Keep this the same
}

function upTime(countTo) {
  const now = new Date();
  const countToDate = new Date(countTo);
  
  // Calculate years
  let years = now.getFullYear() - countToDate.getFullYear();
  
  // Calculate months
  let months = now.getMonth() - countToDate.getMonth();
  
  // Adjust years and months if needed
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Calculate days
  let tempDate = new Date(countToDate);
  tempDate.setFullYear(now.getFullYear());
  tempDate.setMonth(now.getMonth());
  
  let days = now.getDate() - tempDate.getDate();
  
  // Adjust months and days if needed
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
    
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  // Make sure the elements have text nodes to update
  if (document.getElementById('years') && !document.getElementById('years').firstChild) {
    document.getElementById('years').appendChild(document.createTextNode('0'));
  }
  
  if (document.getElementById('months') && !document.getElementById('months').firstChild) {
    document.getElementById('months').appendChild(document.createTextNode('0'));
  }
  
  if (document.getElementById('days') && !document.getElementById('days').firstChild) {
    document.getElementById('days').appendChild(document.createTextNode('0'));
  }
  
  // Update the DOM elements
  if (document.getElementById('years') && document.getElementById('years').firstChild) {
    document.getElementById('years').firstChild.nodeValue = years;
  }
  
  if (document.getElementById('months') && document.getElementById('months').firstChild) {
    document.getElementById('months').firstChild.nodeValue = months;
  }
  
  if (document.getElementById('days') && document.getElementById('days').firstChild) {
    document.getElementById('days').firstChild.nodeValue = days;
  }
  
  // Update every minute
  clearTimeout(upTime.to);
  upTime.to = setTimeout(function(){ upTime(countTo); }, 60000);
}
