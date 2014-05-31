function keystoneAndDisplayImage(ctx, img, x, y, pixelWidth, 
                                  scalingFactor) {
  var h = img.height,
      w = img.width,
        
      // The number of slices to draw.
      numSlices = Math.abs(pixelWidth),
        
      // The width of each source slice.
      sliceWidth = w / numSlices,
        
      // Whether to draw the slices in reverse order or not.
      polarity = (pixelWidth > 0) ? 1 : -1,

      // How much should we scale the width of the slice 
      // before drawing?
      widthScale = Math.abs(pixelWidth) / w,
        
      // How much should we scale the height of the slice 
      // before drawing? 
      heightScale = (1 - scalingFactor) / numSlices;

      for(var n = 0; n < numSlices; n++) {

  // Source: where to take the slice from.
  var sx = sliceWidth * n,
      sy = 0,
      sWidth = sliceWidth,
      sHeight = h;
  
  // Destination: where to draw the slice to 
  // (the transformation happens here).
  var dx = x + (sliceWidth * n * widthScale * polarity),
      dy = y + ((h * heightScale * n) / 2),
      dWidth = sliceWidth * widthScale,
      dHeight = h * (1 - (heightScale * n));

  ctx.drawImage(img, sx, sy, sWidth, sHeight, 
                dx, dy, dWidth, dHeight);
  }
}