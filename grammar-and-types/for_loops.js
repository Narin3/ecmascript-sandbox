/**
* Topic: For loops
* Problem instruction: There are some mistakes in the code also you can learn about for loops.
* Relevant resources:
* -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

//Problem.1 This code will count from 0 to 12, if you fix it.
const a = 12;
for (let i = 0; i < a;i++){
  console.log(i);
}

//Problem.2 The code will print all odd numbers from 0 to 100, after fixing.
for (let i = 0; i < 101; i++){
  if (i %2 !== 0){
    console.log(i);
  }
}

/**
 * Solution - below is a base64 blob of the solution.
 *
--begin--
LyoqCiogVG9waWM6IEZvciBsb29wcwoqIFByb2JsZW0gaW5zdHJ1Y3Rpb246IFRoZXJlIGFyZSBz
b21lIG1pc3Rha2VzIGluIHRoZSBjb2RlIGFsc28geW91IGNhbiBsZWFybiBhYm91dCBmb3IgbG9v
cHMuCiogUmVsZXZhbnQgcmVzb3VyY2VzOgoqIC1odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9y
Zy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0d1aWRlL0xvb3BzX2FuZF9pdGVyYXRpb24KKi8K
Ci8vUHJvYmxlbS4xIFRoaXMgY29kZSB3aWxsIGNvdW50IGZyb20gMCB0byAxMiwgaWYgeW91IGZp
eCBpdC4KY29uc3QgYSA9IDEyOwpmb3IgKGxldCBpID0gMDsgaSA8IGE7IGkrKyl7CiAgY29uc29s
ZS5sb2coaSk7Cn0KCi8vUHJvYmxlbS4yIFRoZSBjb2RlIHdpbGwgcHJpbnQgYWxsIG9kZCBudW1i
ZXJzIGZyb20gMCB0byAxMDAsIGFmdGVyIGZpeGluZy4KZm9yIChsZXQgaSA9IDA7IGkgPCAxMDE7
IGkrKyl7CiAgaWYgKGkgJTIgIT09IDApewogICAgY29uc29sZS5sb2coaSk7CiAgfQp9Cg==
--end--
 *
 */
