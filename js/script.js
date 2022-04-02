/* Created by: Venika Sem
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

'use strict'
/**
 * This function calculates the volume of a pyramid.
 */
function calculate() {
  // input
  const lengthOfPyramid = parseFloat(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseFloat(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseFloat(document.getElementById('height-of-pyramid').value)

   // process
  const volume = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3 

  // output
  document.getElementById('volume').innerHTML = '<p>The volume is: ' + volume.toFixed(2) + ' cm³</p>'
}