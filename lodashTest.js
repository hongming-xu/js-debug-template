var data = ["nginxflow", "xuzh1"];
// var regex = new RegExp("nginx", 'ig' ); 
var regex1 = "/nginx/ig"; 
var regex = eval("/nginx/ig"); 
var results =  _.filter(data, datasource => {return regex.test(datasource)});

console.log(results);
