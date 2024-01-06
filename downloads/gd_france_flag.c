#include <stdio.h>
#include <gd.h>

void draw_france_flag(gdImagePtr img);

int main() {
    // Flag dimensions
    int width = 900;
    int height = 600;

    // Create a true-color GD image
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // Draw the France flag on the image
    draw_france_flag(img);

    // Output the image to a file
    FILE *outputFile = fopen("./../images/france_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);

    return 0;
}

void draw_france_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // Define France flag colors
    int blue = gdImageColorAllocate(img, 0, 35, 149);
    int white = gdImageColorAllocate(img, 255, 255, 255);
    int red = gdImageColorAllocate(img, 239, 65, 53);

    // Calculate stripe widths
    int stripe_width = width / 3;

    // Fill the background with blue color
    gdImageFilledRectangle(img, 0, 0, width, height, blue);

    // Draw three vertical stripes in the order: blue, white, red
    gdImageFilledRectangle(img, 0, 0, stripe_width, height, blue);
    gdImageFilledRectangle(img, stripe_width, 0, stripe_width * 2, height, white);
    gdImageFilledRectangle(img, stripe_width * 2, 0, width, height, red);
}
