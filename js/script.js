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
  const lenghtOfPyramid = parseFloat(document.getElementById('lenght-of-pyramid').value)
  const widthOfPyramid = parseFloat(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseFloat(document.getElementById('height-of-pyramid').value)

   // process
  const volume = ((lenghtOfPyramid * widthOfPyramid) / 2) * heightOfPyramid

  // output
  document.getElementById('volume').innerHTML = '<p>The volume is: ' + volume.toFixed(2) + ' cm²</p>'
}