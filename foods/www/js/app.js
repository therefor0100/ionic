// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
	//配置整个ui路由的路径，基于state状态
	//$urlRouterProvider配置路由重定向
			$stateProvider
			//加载底部选项卡
			.state('tabs',{
				url:'/tab',
				templateUrl:'template/tabs.html'
			})
			//加载首页视图
//写法有二种：一：tabs.home,然后在url中配置 /home或者：home，然后在url中配置：/tabs/home
			.state('tabs.home',{
				url:'/home',
				//通过view匹配当前路径要加载的内容
				views:{
						'tab-home':{
								templateUrl:'template/home.html',
								controller:'ctrl'
						}
				}
			})
			//加载关于视图
		.state('tabs.about',{
						url:'/about',
						//通过view匹配当前路径要加载的内容
						views:{
								'tab-about':{
										templateUrl:'template/about.html',
										controller:'ctrl1'
								},
								
						}
				})
		
		//加载关于中嵌套的header视图
		.state('tabs.about.header',{
					url:'/header',
					views:{
						'ddd':{
							templateUrl:'template/header.html'
						}
					}
		})
		//加载列表详情页
			.state('tabs.list',{
					url:'/about/header/:id',
					views:{
						'tab-about':{
							templateUrl:'template/list.html',
							controller:'ctrl2'
						}
					}
		   })
		.state('tabs.about.test',{
					url:'/test',
					views:{
						'ddd':{
							templateUrl:'template/test.html',
								controller:'test'
						}
					}
		})

		.state('tabs.about.know',{
			url:'/know',
			views:{
				'ddd':{
					templateUrl:'template/know.html',
					controller:'know'
				}
			}
		})
		.state('tabs.about.foods',{
			url:'/foods',
			views:{
				'ddd':{
					templateUrl:'template/foods.html',
					controller:'foods'
				}
			}
		})
		
		
		//加载other视图
		.state('tabs.other',{
			url:'/other',
			views:{
				'tab-other':{
					templateUrl:'template/other.html'
				}
			}
			
			
		})
		
		
		
		$urlRouterProvider.otherwise('/tab/home')
		
})


//控制器 
.controller('ctrl',function($scope,$http){
		$http({
			method:'get',
			url:'food1.json'
			}).success(function(data){
//			$scope.arr=data
					console.log(data)
					$scope.arr=data
		})
	
})

.controller('ctrl1',function($scope,$http){
	$http({
		method:'get',
		url:'header.json'
	}).success(function(data){
		$scope.list1=data
	})
		
})

.controller('ctrl2',function($scope,$http,$stateParams){
	
	$http({
		method:'get',
		url:'header.json'
	}).success(function(data){
		$scope.str=data[$stateParams.id]
	
	})
})
.controller('know',function($scope,$http){
	$http({
		method:'get',
		url:'know.json'
	}).success(function(data){
		$scope.arr=data
	})
})
.controller('foods',function($scope,$http){
	$http({
		method:'get',
		url:'foods.json'
	}).success(function(data){
		$scope.arr=data
	})
})

.controller("test",function($scope,$http){
	$http({
		method:'get',
		url:'test.json'
	}).success(function(data){
			$scope.arr=data
	})
})
