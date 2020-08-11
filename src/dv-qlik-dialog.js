define( [], function () {
	return {		
//==================================================================================================================================================//	
//***********************************<Start>**********************************************************************************************************//
//==================================================================================================================================================//
luiConfirm:function(luiPopover,props){
	var sHeader= props.header !=undefined ? props.header : 'Confirmation'
	var sBody= props.body !=undefined ? props.body : 'Are you sure you sure?'
	var eTemplate=`<lui-popover style="max-width: 450px;">
	  <lui-popover-header>
		<lui-popover-title>${sHeader}</lui-popover-title>
	  </lui-popover-header>
	  <lui-popover-body>
		${sBody}
	  </lui-popover-body>
	  <lui-popover-footer>
		<button class="lui-button lui-popover__button lui-button--success" ng-click="confirm();">Yes</button>
		<button class="lui-button lui-popover__button lui-button--danger" ng-click="close();">No</button>
	  </lui-popover-footer>
	</lui-popover><div></div>`;


		luiPopover.show(
			{
				template:eTemplate,
				closeOnEscape: false,
				dock:"bottom" ,
				alignTo: props.element,
				close:function(){alert('closing')},
				function(){console.log('test',this)},
				controller: ['$scope','$element', function($scope,$element) {
					$scope.confirm=function(){
						/*console.log($scope);
						console.log(luiPopover);
						console.log($element);
						console.log(this);
						*/
						props.confirm();
						this.close();
						return 'Yes';
					}
				}]
			} 
		)
},
//-----------------------------------------------------
luiCopy:function(luiPopover,props){
	var sHeader= props.header !=undefined ? props.header : 'Confirmation'
	var sBody= props.body !=undefined ? props.body : 'Are you sure you sure?'
	
	var eTemplate=`<lui-popover style="max-width: 450px;">
	  <lui-popover-header>
		<lui-popover-title>${sHeader}</lui-popover-title>
	  </lui-popover-header>
	  <lui-popover-body>
		<label class="lui-label">Enter # of copies you want to make or provide a list of names:</label>
		<textarea name="description" class="lui-textarea"></textarea>
	  </lui-popover-body>
	  <lui-popover-footer>
		<button class="lui-button lui-popover__button lui-button--success" ng-click="confirm();">Apply</button>
		<button class="lui-button lui-popover__button lui-button--danger" ng-click="close();">Cancel</button>
	  </lui-popover-footer>
	</lui-popover><div></div>`;


		luiPopover.show(
			{
				template:eTemplate,
				closeOnEscape: false,
				dock:"bottom" ,
				alignTo: props.element,
				close:function(){alert('closing')},
				function(){console.log('test',this)},
				controller: ['$scope','$element', function($scope,$element) {
					$scope.confirm=function(){
						/*
						console.log('Scope',$scope);
						console.log('Popover',luiPopover);
						console.log('element',$element[0]);
						console.log('this',this);
						*/
						
						var popoverElement=$element[0];
						var paramValue=popoverElement.getElementsByClassName('lui-textarea')[0].value
						this.close();
						props.confirm(paramValue);
						
						return 'Yes';
					}
				}]
			} 
		)
},
//-----------------------------------------------------
 luiVariableEdit:function(luiPopover,props={header:undefined}){
	var sHeader= props['header'] !=undefined ? props['header'] : 'Edit Item'

		var eTemplate=`
		<lui-popover style="min-width: 600px;">
		<lui-popover-header><lui-popover-title>${sHeader}</lui-popover-title></lui-popover-header>
		<lui-popover-body style="overflow:scroll;">
		<label class="lui-label">Name</label>
		<input name="name" class="lui-input"/>
		<label class="lui-label">Label</label>
		<input name="label" class="lui-input"/>
		<label class="lui-label">Description</label>
		<textarea name="description" class="lui-textarea"></textarea>
		<label class="lui-label">Definition</label>
		<textarea name="defintion" class="lui-textarea"></textarea>
		<label class="lui-label">Tags</label>
		<input name="tags" class="lui-input"/>
		</lui-popover-body>
		<lui-popover-footer>
		<button class="lui-button lui-popover__button lui-button--success" ng-click="confirm();">Apply</button>
		<button class="lui-button lui-popover__button lui-button--danger" ng-click="close();">Cancel</button>
		</lui-popover-footer>
		</lui-popover><div></div>`;


		luiPopover.show(
			{
				template:eTemplate,
				closeOnEscape: false,
				dock:"bottom" ,
				alignTo: props.element,
				close:function(){alert('closing')},
				function(){console.log('test',this)},
				controller: ['$scope','$element', function($scope,$element) {
					$scope.confirm=function(){
						/*console.log($scope);
						console.log(luiPopover);
						console.log($element);
						console.log(this);
						*/
						console.log(variableList)
						//props.confirm();
						this.close();
						return 'Yes';
					}
				}]
			} 
		)
}
//==================================================================================================================================================//
//***********************************<END>**********************************************************************************************************//
//==================================================================================================================================================//
	}
})



