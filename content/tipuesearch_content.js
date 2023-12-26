var tipuesearch = {"pages": [{'title': 'about', 'text': '\xa0 https://github.com/yuhao-08/cp2023 \n', 'tags': '', 'url': 'about.html'}, {'title': 'w5', 'text': '\n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n \n \n \n // 包含標準輸出入程式庫的標頭文件 \n // https://blog.csdn.net/weixin_38468077/article/details/101069365 \n // http://www.gnuplot.info/demo/ \n // https://github.com/sysprog21/rv32emu \n // https://github.com/sysprog21/semu  \n // https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 \n // https://cs61c.org/fa23/ \n // https://greenteapress.com/wp/think-python-2e/ \n // https://github.com/ecalvadi/c99-examples \n // https://github.com/gouravthakur39/beginners-C-program-examples \n // https://github.com/ergenekonyigit/Numerical-Analysis-Examples \n // https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf \n // https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf \n // https://jsommers.github.io/cbook/cbook.pdf \n // https://jsommers.github.io/cbook/index.html \n // http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf \n // http://cslibrary.stanford.edu/101/EssentialC.pdf \n // https://publications.gbdirect.co.uk/c_book/ \n // https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf \n // ***** execute on replit  \n // cd downloads \n // cc gnuplot_ex1.c -o gnuplot_ex1 \n // ./gnuplot_ex1 \n #include <stdio.h> \n \xa0\xa0\xa0 \xa0 \n // 主函式 \n int   main() { \n \xa0\xa0\xa0\xa0 // Start a Gnuplot process using popen \n \xa0\xa0\xa0\xa0 FILE   *gnuplotPipe = popen( "gnuplot -persistent" ,  "w" ); \n \xa0\xa0\xa0\xa0 if   (!gnuplotPipe) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Failed to start Gnuplot.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 // Use Gnuplot plotting commands, specify font and output as PNG \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "set terminal png font \'default,10\' size 800,400\\n" ); \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "set output \'./../images/gnuplot_ex1.png\'\\n" ); \n \xa0\xa0\xa0\xa0 fprintf (gnuplotPipe,  "plot sin(x)" ); \n \xa0\xa0\xa0\xa0 // Close popen \n \xa0\xa0\xa0\xa0 pclose(gnuplotPipe); \n \xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '\n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17\xa0 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n \n \n \n #include < stdio.h > \n #include < gd.h > \n #include < math.h > \n \xa0 \n void draw_roc_flag(gdImagePtr img); \n void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue); \n \xa0 \n int main() { \n \xa0\xa0\xa0\xa0 // width 3: height 2 \n \xa0\xa0\xa0\xa0 int width = 1200; \n \xa0\xa0\xa0\xa0 int height = (int)(width*2.0 / 3.0); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_roc_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE *outputFile = fopen("./roc_flag.png", "wb"); \n \xa0\xa0\xa0\xa0 if (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf(stderr, "Error opening the output file.\\n"); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return 1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose(outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return 0; \n } \n \xa0 \n void draw_roc_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int red, white, blue; \n \xa0\xa0\xa0\xa0 int center_x = (int)(width/4); \n \xa0\xa0\xa0\xa0 int center_y = (int)(height/4); \n \xa0\xa0\xa0\xa0 int sun_radius = (int)(width/8); \n \xa0 \n \xa0\xa0\xa0\xa0 // Colors for the flag \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 242, 0, 0); // Red color \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255); // White stripes \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 41, 204); // Blue \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製紅色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製藍色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽 \n \xa0\xa0\xa0\xa0 draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue); \n } \n void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) { \n \xa0\xa0\xa0\xa0 float angle = 0; \n \xa0\xa0\xa0\xa0 int numRays = 12; // 光芒的數量 \n \xa0 \n \xa0\xa0\xa0\xa0 gdPoint points[3]; // 三個頂點的陣列 \n \xa0 \n \xa0\xa0\xa0\xa0 for (int i = 0; i < numRays; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 angle = i * (2 * M_PI / numRays); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 float x1 = center_x + cos(angle) * sun_radius; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 float y1 = center_y + sin(angle) * sun_radius; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 調整兩個底邊頂點的位置 \n \xa0\xa0\xa0\xa0\xa0\xa0 float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5); \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 設定多邊形的三個頂點 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[0].x = (int)x1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[0].y = (int)y1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[1].x = (int)x2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[1].y = (int)y2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[2].x = (int)x3; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[2].y = (int)y3; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 3, white); \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0 //外圈 \n \xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue); \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽內部 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white); \n } \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17\xa0 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void draw_usa_flag(gdImagePtr img); \n void draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color, double rotation_angle); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   width  =   800 ; \n \xa0\xa0\xa0\xa0 int   height  =   ( int )(width  /   1.9 ); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img  =   gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img,  0 ); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_usa_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE   * outputFile  =   fopen( "./../images/usa_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile  = =   NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf(stderr,  "打开输出文件时出错。\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1 ; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile,  9 ); \n \xa0\xa0\xa0\xa0 fclose(outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0 ; \n } \n \xa0 \n void draw_usa_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width  =   gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height  =   gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 / /   国旗颜色 \n \xa0\xa0\xa0\xa0 red  =   gdImageColorAllocate(img,  178 ,  34 ,  52 );  / /   红色条纹 \n \xa0\xa0\xa0\xa0 white  =   gdImageColorAllocate(img,  255 ,  255 ,  255 );  / /   白色条纹 \n \xa0\xa0\xa0\xa0 blue  =   gdImageColorAllocate(img,  60 ,  59 ,  110 );  / /   蓝色矩形 \n \xa0 \n \xa0\xa0\xa0\xa0 int   stripe_height  =   33   ; \n \xa0\xa0\xa0\xa0 int   stripe_width  =   width ; \n \xa0\xa0\xa0\xa0 int   star_size  =   ( int )( 0.0308   *   height);  / /   星星大小 \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   y  =   0 ; y < height; y  + =   stripe_height) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (y  /   stripe_height  %   2   = =   0 ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledRectangle(img,  0 , y, stripe_width, y  +   stripe_height, red); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }  else   { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledRectangle(img,  0 , y, stripe_width, y  +   stripe_height, white); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img,  0 ,  0 , width  *   2   /   5 , stripe_height  *   698   /   100 , blue); \n \xa0 \n \xa0\xa0\xa0\xa0 int   star_spacing_x  =   ( int )( 0.129   *   height);  / /   横向星星之间的间距 \n \xa0\xa0\xa0\xa0 int   star_spacing_y  =   ( int )( 0.054   *   height);  / /   纵向星星之间的间距 \n \xa0\xa0\xa0\xa0 int   star_start_x  =   ( int )( 0.125   *   height);  / /   星星的起始X位置 \n \xa0\xa0\xa0\xa0 int   star_start_y  =   ( int )( 0.06   *   height);  / /   星星的起始Y位置 \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   row  =   0 ; row <  9 ; row + + ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   starsPerRow  =   (row  %   2   = =   0 ) ?  6   :  5 ; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 / /   计算 2 、 4 、 6 和 8 排星星的偏移量 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   offset_x  =   (row  %   2   = =   0 ) ? star_spacing_x  /   - 2   :  0 ; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   ( int   star  =   0 ; star < starsPerRow; star + + ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   x  =   star_start_x  +   star  *   star_spacing_x  +   offset_x; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 / /   旋转角度（以弧度为单位） \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double rotation_angle  =   M_PI  /   5 ;  / /   忘記多少度的旋转 \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   y  =   star_start_y  +   row  *   star_spacing_y; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 draw_star(img, x, y, star_size, white, rotation_angle); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n } \n \xa0 \n void draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color, double rotation_angle) { \n \xa0\xa0\xa0\xa0 gdPoint points[ 10 ]; \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   i  =   0 ; i <  10 ; i + + ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double angle  =   M_PI  /   2   +   i  *   2   *   M_PI  /   10   +   rotation_angle; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   radius  =   (i  %   2   = =   0 ) ? size : size  /   2 ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].x  =   x  +   radius  *   cos(angle); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].y  =   y  +   radius  *   sin(angle); \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 / /   用指定的颜色填充星星 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points,  10 , color); \n } \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w12', 'text': '\n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n \n \n \n \xa0\xa0\xa0\xa0 #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   width = 800; \n \xa0\xa0\xa0\xa0 int   height = 600; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "hellogd.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0 \xa0 \n fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0 \xa0 \n return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 int   red = gdImageColorAllocate(img, 255, 0, 0); \n \xa0\xa0\xa0\xa0 int   blue = gdImageColorAllocate(img, 0, 0, 255); \n \xa0\xa0\xa0\xa0 int   black = gdImageColorAllocate(img, 0, 0, 0); \n \xa0\xa0\xa0\xa0 int   white = gdImageColorAllocate(img, 255, 255, 255); \n \xa0\xa0\xa0\xa0 // 長方形塗色 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, white); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, ( int )width/4, ( int )height/4, blue); \n \xa0\xa0\xa0\xa0 // 橢圓形塗色 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, ( int )width*3/4, ( int )height/4, ( int )width/4, ( int )width/4, red); \n \xa0\xa0\xa0\xa0 // 橢圓形畫線 \n \xa0\xa0\xa0\xa0 gdImageEllipse(img, ( int )width*3/4, ( int )height*3/4, ( int )width/4, ( int )width/4, red); \n \xa0\xa0\xa0\xa0 // 畫直線 \n \xa0\xa0\xa0\xa0 gdImageLine(img, ( int )width/2, ( int )height/2, ( int )width/2, ( int )height/2 + 100, blue); \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 多邊形畫線 \n \xa0\xa0\xa0\xa0 gdPoint points[4]; \n \xa0\xa0\xa0\xa0 points[0].x = ( int )width/4; \n \xa0\xa0\xa0\xa0 points[0].y = ( int )height*3/4; \n \xa0\xa0\xa0\xa0 points[1].x = points[0].x + 100; \n \xa0\xa0\xa0\xa0 points[1].y = points[0].y; \n \xa0\xa0\xa0\xa0 points[2].x = points[1].x; \n \xa0\xa0\xa0\xa0 points[2].y = points[1].y + 100; \n \xa0\xa0\xa0\xa0 points[3].x = points[2].x - 100; \n \xa0\xa0\xa0\xa0 points[3].y = points[2].y; \n \xa0\xa0\xa0\xa0 gdImagePolygon(img, points, 4, black); \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 多邊形塗色 \n \xa0\xa0\xa0\xa0 gdPoint points2[4]; \n \xa0\xa0\xa0\xa0 points2[0].x = ( int )width/3; \n \xa0\xa0\xa0\xa0 points2[0].y = ( int )height/2; \n \xa0\xa0\xa0\xa0 points2[1].x = points2[0].x + 100; \n \xa0\xa0\xa0\xa0 points2[1].y = points2[0].y; \n \xa0\xa0\xa0\xa0 points2[2].x = points2[1].x; \n \xa0\xa0\xa0\xa0 points2[2].y = points2[1].y + 100; \n \xa0\xa0\xa0\xa0 points2[3].x = points2[2].x - 150; \n \xa0\xa0\xa0\xa0 points2[3].y = points2[2].y; \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points2, 4, red); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '\n \n \n \n \n \n \n \n \n \n \n \n 學習C語言的過程讓我深刻體悟到程式設計的基礎重要性。雖然學習起來非常痛苦，但這奠定了我扎實的程式基礎，磨練了邏輯思維。 我期待在未來的應用中能更深入地運用這門強大的語言。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'Brython', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers \xa0 (整數 int(), 浮點數 float()) \n Strings \xa0 (字串) \n print (Python 內建函式, \xa0 print() \xa0 函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt \xa0 動態頁面超文件). \n practice_html.txt \xa0 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n <!-- 啟動 Brython --> \n < script > \n window.onload=function(){ \n brython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']}); \n } \n </ script > \n \n \n \n \n \n \n \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator \xa0 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n \n \n \n \n \n \n \n sum   =   1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 \n print ( sum ) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n \n \n \n \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n \n \n \n \n \n \n \n sum   =   1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 \n print ( sum ) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n", 'tags': '', 'url': 'Brython.html'}]};