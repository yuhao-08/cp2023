var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲:https://github.com/yuhao-08/cp2023 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Week 6', 'text': '\n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n \n \n \n #include < stdio.h > \n #include < gd.h > \n #include < math.h > \n \xa0 \n void draw_roc_flag(gdImagePtr img); \n void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue); \n \xa0 \n int main() { \n \xa0\xa0\xa0\xa0 // width 3: height 2 \n \xa0\xa0\xa0\xa0 int width = 1200; \n \xa0\xa0\xa0\xa0 int height = (int)(width*2.0 / 3.0); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_roc_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE *outputFile = fopen("./roc_flag.png", "wb"); \n \xa0\xa0\xa0\xa0 if (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf(stderr, "Error opening the output file.\\n"); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return 1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose(outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return 0; \n } \n \xa0 \n void draw_roc_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int red, white, blue; \n \xa0\xa0\xa0\xa0 int center_x = (int)(width/4); \n \xa0\xa0\xa0\xa0 int center_y = (int)(height/4); \n \xa0\xa0\xa0\xa0 int sun_radius = (int)(width/8); \n \xa0 \n \xa0\xa0\xa0\xa0 // Colors for the flag \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 242, 0, 0); // Red color \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255); // White stripes \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 41, 204); // Blue \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製紅色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製藍色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽 \n \xa0\xa0\xa0\xa0 draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue); \n } \n void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) { \n \xa0\xa0\xa0\xa0 float angle = 0; \n \xa0\xa0\xa0\xa0 int numRays = 12; // 光芒的數量 \n \xa0 \n \xa0\xa0\xa0\xa0 gdPoint points[3]; // 三個頂點的陣列 \n \xa0 \n \xa0\xa0\xa0\xa0 for (int i = 0; i < numRays; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 angle = i * (2 * M_PI / numRays); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 float x1 = center_x + cos(angle) * sun_radius; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 float y1 = center_y + sin(angle) * sun_radius; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 調整兩個底邊頂點的位置 \n \xa0\xa0\xa0\xa0\xa0\xa0 float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5); \n \xa0\xa0\xa0\xa0\xa0\xa0 float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5); \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 // 設定多邊形的三個頂點 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[0].x = (int)x1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[0].y = (int)y1; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[1].x = (int)x2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[1].y = (int)y2; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[2].x = (int)x3; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[2].y = (int)y3; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 3, white); \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0 //外圈 \n \xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue); \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽內部 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white); \n } \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void draw_usa_flag(gdImagePtr img); \n void draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color, double rotation_angle); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   width  =   800 ; \n \xa0\xa0\xa0\xa0 int   height  =   ( int )(width  /   1.9 ); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img  =   gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img,  0 ); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_usa_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE   * outputFile  =   fopen( "./../images/usa_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile  = =   NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf(stderr,  "打开输出文件时出错。\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1 ; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile,  9 ); \n \xa0\xa0\xa0\xa0 fclose(outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0 ; \n } \n \xa0 \n void draw_usa_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width  =   gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height  =   gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 / /   国旗颜色 \n \xa0\xa0\xa0\xa0 red  =   gdImageColorAllocate(img,  178 ,  34 ,  52 );  / /   红色条纹 \n \xa0\xa0\xa0\xa0 white  =   gdImageColorAllocate(img,  255 ,  255 ,  255 );  / /   白色条纹 \n \xa0\xa0\xa0\xa0 blue  =   gdImageColorAllocate(img,  60 ,  59 ,  110 );  / /   蓝色矩形 \n \xa0 \n \xa0\xa0\xa0\xa0 int   stripe_height  =   33   ; \n \xa0\xa0\xa0\xa0 int   stripe_width  =   width ; \n \xa0\xa0\xa0\xa0 int   star_size  =   ( int )( 0.0308   *   height);  / /   星星大小 \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   y  =   0 ; y < height; y  + =   stripe_height) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   (y  /   stripe_height  %   2   = =   0 ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledRectangle(img,  0 , y, stripe_width, y  +   stripe_height, red); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }  else   { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 gdImageFilledRectangle(img,  0 , y, stripe_width, y  +   stripe_height, white); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img,  0 ,  0 , width  *   2   /   5 , stripe_height  *   698   /   100 , blue); \n \xa0 \n \xa0\xa0\xa0\xa0 int   star_spacing_x  =   ( int )( 0.129   *   height);  / /   横向星星之间的间距 \n \xa0\xa0\xa0\xa0 int   star_spacing_y  =   ( int )( 0.054   *   height);  / /   纵向星星之间的间距 \n \xa0\xa0\xa0\xa0 int   star_start_x  =   ( int )( 0.125   *   height);  / /   星星的起始X位置 \n \xa0\xa0\xa0\xa0 int   star_start_y  =   ( int )( 0.06   *   height);  / /   星星的起始Y位置 \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   row  =   0 ; row <  9 ; row + + ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   starsPerRow  =   (row  %   2   = =   0 ) ?  6   :  5 ; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 / /   计算 2 、 4 、 6 和 8 排星星的偏移量 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   offset_x  =   (row  %   2   = =   0 ) ? star_spacing_x  /   - 2   :  0 ; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   ( int   star  =   0 ; star < starsPerRow; star + + ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   x  =   star_start_x  +   star  *   star_spacing_x  +   offset_x; \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 / /   旋转角度（以弧度为单位） \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double rotation_angle  =   M_PI  /   5 ;  / /   忘記多少度的旋转 \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   y  =   star_start_y  +   row  *   star_spacing_y; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 draw_star(img, x, y, star_size, white, rotation_angle); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 } \n } \n \xa0 \n void draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color, double rotation_angle) { \n \xa0\xa0\xa0\xa0 gdPoint points[ 10 ]; \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   i  =   0 ; i <  10 ; i + + ) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double angle  =   M_PI  /   2   +   i  *   2   *   M_PI  /   10   +   rotation_angle; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   radius  =   (i  %   2   = =   0 ) ? size : size  /   2 ; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].x  =   x  +   radius  *   cos(angle); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].y  =   y  +   radius  *   sin(angle); \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 / /   用指定的颜色填充星星 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points,  10 , color); \n } \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Week 6.html'}]};