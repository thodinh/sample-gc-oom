var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();
	
	viewModel.alloc = function(n) {
		var arr = Array.create("byte", n);
		return arr.length;
	}

    viewModel.onAlloc = function() {
		this.alloc(50 * 1024 * 1024);
    }
	
	viewModel.onAllocAndGC = function() {
		this.alloc(50 * 1024 * 1024);
		gc();
    }

    return viewModel;
}

exports.createViewModel = createViewModel;