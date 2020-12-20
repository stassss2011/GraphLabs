import json
import math
import time

import cexprtk
import numpy
from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
from PIL import Image as Image


class Shape:
    def __init__(self, shape_attributes):
        self.attributes = shape_attributes

    def draw(self):
        pass


class Sphere(Shape):
    def __init__(self, shape_attributes):
        super().__init__(shape_attributes)
        self.seconds = time.time()
        self.texture_file = self.attributes["texture_img"]
        img = Image.open(self.texture_file)
        img = img.convert("RGB")
        self.img = img
        self.img_data = numpy.array(list(img.getdata()), numpy.int8)
        self.texture_id_names = {
            "2k_mars.jpg": 0,
            "2k_venus_surface.jpg": 1,
            "2k_earth_daymap.jpg": 2
        }
        # self.texture_id = self.read_texture(self.texture_file)
        self.attributes["distance"] = math.sqrt(sum(map(lambda x: x ** 2, self.attributes['center'])))
        self.attributes["angle"] = 0

    def read_texture(self, filename):
        textID = glGenTextures(3)
        glBindTexture(GL_TEXTURE_2D, textID[self.texture_id_names[filename]])
        glPixelStorei(GL_UNPACK_ALIGNMENT, 1)
        glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP)
        glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP)
        glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT)
        glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT)
        glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST)
        glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST)
        glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_DECAL)
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, self.img.size[0], self.img.size[1], 0, GL_RGB, GL_UNSIGNED_BYTE, self.img_data)
        return textID

    def draw(self):
        glPushMatrix()
        c = self.attributes['center']
        if self.attributes["move"]:
            glTranslatef(self.attributes["distance"] * math.sin(self.attributes["angle"]),
                         c[1], self.attributes["distance"] * math.cos(self.attributes["angle"]))
            self.attributes["angle"] += self.attributes["moveSpeed"]

        else:
            glTranslatef(c[0], c[1], c[2])


        if self.attributes["type"] == "planet":
            pass
            glMaterialfv(GL_FRONT_AND_BACK, GL_EMISSION, [0, 0, 0, 1])
        elif self.attributes["type"] == "star":
            glMaterialfv(GL_FRONT_AND_BACK, GL_EMISSION, self.attributes["color"])

            glLightfv(GL_LIGHT0, GL_POSITION, (self.attributes["distance"] * math.sin(self.attributes["angle"]),
                                               c[1], self.attributes["distance"] * math.cos(self.attributes["angle"])))

            glLightfv(GL_LIGHT0, GL_AMBIENT, self.attributes['light']["mainAttributes"]["ambient"])
            glLightfv(GL_LIGHT0, GL_DIFFUSE, self.attributes['light']["mainAttributes"]["diffuse"])
            glLightfv(GL_LIGHT0, GL_SPECULAR, self.attributes['light']["mainAttributes"]["specular"])

            glLightf(GL_LIGHT0, GL_CONSTANT_ATTENUATION, self.attributes['light']["specialAttributes"]["constant"])
            glLightf(GL_LIGHT0, GL_LINEAR_ATTENUATION, self.attributes['light']["specialAttributes"]["linear"])
            glLightf(GL_LIGHT0, GL_QUADRATIC_ATTENUATION, self.attributes['light']["specialAttributes"]["quadratic"])


        ambient = self.attributes["color"]
        ambient.append(self.attributes["alpha"])

        diffuse = self.attributes["color"]
        diffuse.append(self.attributes["alpha"])

        glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, ambient)
        glMaterialfv(GL_FRONT_AND_BACK, GL_DIFFUSE, diffuse)
        glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, [0.0, 0.0, 0.0, 1.0])

        if time.time() - self.seconds >= 6:
            glEnable(GL_TEXTURE_2D)
            glBindTexture(GL_TEXTURE_2D, self.read_texture(self.texture_file)[self.texture_id_names[self.texture_file]])
            glEnable(GL_TEXTURE_GEN_S)
            glEnable(GL_TEXTURE_GEN_T)
            glTexGeni(GL_S, GL_TEXTURE_GEN_MODE, GL_SPHERE_MAP)
            glTexGeni(GL_T, GL_TEXTURE_GEN_MODE, GL_SPHERE_MAP)

        if self.attributes['fill']:
            glutSolidSphere(self.attributes['radius'], 40, 40)
        else:
            glutWireSphere(self.attributes['radius'], 40, 40)

        if time.time() - self.seconds >= 6:
            glDisable(GL_TEXTURE_2D)
        if time.time() - self.seconds >= 12:
            self.seconds = time.time()
        glPopMatrix()


class Cube(Shape):
    def __init__(self, shape_attributes):
        super().__init__(shape_attributes)
        self.attributes["distance"] = math.sqrt(sum(map(lambda x: x ** 2, self.attributes['center'])))
        self.attributes["angle"] = 0

    def draw(self):
        glColor3fv(self.attributes['color'][:3])
        glPushMatrix()
        c = self.attributes['center']
        glTranslatef(c[0], c[1], c[2])

        if self.attributes["move"]:
            glTranslatef(self.attributes["distance"] * math.sin(self.attributes["angle"]),
                         c[1], self.attributes["distance"] * math.cos(self.attributes["angle"]))
            self.attributes["angle"] += self.attributes["moveSpeed"]

        else:
            glTranslatef(c[0], c[1], c[2])

        ambient = self.attributes["color"]
        ambient.append(self.attributes["alpha"])

        diffuse = self.attributes["color"]
        diffuse.append(self.attributes["alpha"])

        glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, ambient)
        glMaterialfv(GL_FRONT_AND_BACK, GL_DIFFUSE, diffuse)
        glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, [0, 0, 0, 1.0])

        if self.attributes['fill']:
            glutSolidCube(self.attributes['size'])
        else:
            glutWireCube(self.attributes['size'])
        glPopMatrix()


class Torus(Shape):
    def __init__(self, shape_attributes):
        super().__init__(shape_attributes)
        self.attributes["distance"] = math.sqrt(sum(map(lambda x: x ** 2, self.attributes['center'])))
        self.attributes["angle"] = 0

    def draw(self):
        glColor3fv(self.attributes['color'][:3])
        glPushMatrix()
        c = self.attributes['center']
        glTranslatef(c[0], c[1], c[2])

        if self.attributes["move"]:
            glTranslatef(self.attributes["distance"] * math.sin(self.attributes["angle"]),
                         c[1], self.attributes["distance"] * math.cos(self.attributes["angle"]))
            self.attributes["angle"] += self.attributes["moveSpeed"]

        else:
            glTranslatef(c[0], c[1], c[2])

        ambient = self.attributes["color"][0:3]
        ambient.append(self.attributes["alpha"])

        diffuse = self.attributes["color"][0:3]
        diffuse.append(self.attributes["alpha"])

        glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, ambient)
        glMaterialfv(GL_FRONT_AND_BACK, GL_DIFFUSE, diffuse)
        glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, [0, 0, 0, 1.0])
        if self.attributes['fill']:
            glutSolidTorus(self.attributes['inner_r'], self.attributes['outer_r'], self.attributes['nsides'], self.attributes['rings'])
        else:
            glutWireTorus(self.attributes['inner_r'], self.attributes['outer_r'], self.attributes['nsides'], self.attributes['rings'])
        glPopMatrix()


class Plane(Shape):
    def __init__(self, shape_attributes):
        super().__init__(shape_attributes)
        self.planeVertex = []
        self.func()

    def func(self):
        equation = self.attributes['equation']
        z = lambda a, b: cexprtk.evaluate_expression(equation, {'x': a, 'y': b})
        for i in range(0, 20):
            x = i * 0.025
            for j in range(0, 20):
                y = j * 0.025
                self.planeVertex.append([x, y, z(x, y)])
                self.planeVertex.append([x, y + 0.025, z(x, y + 0.025)])
                self.planeVertex.append([x + 0.025, y, z(x + 0.025, y)])

                self.planeVertex.append([x + 0.025, y, z(x + 0.025, y)])
                self.planeVertex.append([x + 0.025, y + 0.025, z(x + 0.025, y + 0.025)])
                self.planeVertex.append([x, y + 0.025, z(x, y + 0.025)])

    def draw(self):
        glColor3fv(self.attributes['color'][0:3])
        glPushMatrix()
        c = self.attributes['center']
        glTranslatef(c[0], c[1], c[2])
        glMaterialfv(GL_FRONT_AND_BACK, GL_EMISSION, [0, 0, 0, 1])
        ambient = self.attributes["color"]
        ambient.append(self.attributes["alpha"])

        diffuse = self.attributes["color"]
        diffuse.append(self.attributes["alpha"])

        glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, ambient)
        glMaterialfv(GL_FRONT_AND_BACK, GL_DIFFUSE, diffuse)
        glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, [0.2, 0.3, 0.4, 1.0])
        glEnableClientState(GL_VERTEX_ARRAY)
        glVertexPointer(3, GL_FLOAT, 0, self.planeVertex)
        glDrawArrays(GL_TRIANGLES, 0, len(self.planeVertex))
        glDisableClientState(GL_VERTEX_ARRAY)
        glPopMatrix()


class Window:
    drawList = []
    cameraPos = [0, 0, 5]
    cameraAngle = [0, 0]
    cameraRadius = 5
    cameraUp = 1
    shine = True
    seconds = 0

    def __init__(self, fileName):
        with open(fileName, "r") as f:
            data = json.load(f)
            self.width = data["windowWidth"]
            self.height = data["windowHeight"]
            self.coords = data["windowCoords"]
            for sh in data['shapes']:
                if sh['type'] == 'sphere':
                    self.drawList.append(Sphere(sh['attributes']))
                elif sh['type'] == 'cube':
                    self.drawList.append(Cube(sh['attributes']))
                elif sh['type'] == 'plane':
                    self.drawList.append(Plane(sh['attributes']))
                elif sh['type'] == 'torus':
                    self.drawList.append(Torus(sh['attributes']))
            # self.light = data['light']

    def initWindow(self):
        glutInit()
        glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH)
        glutInitWindowSize(self.width, self.height)
        glutInitWindowPosition(self.coords[0], self.coords[1])
        glutCreateWindow(b"Lab 3")
        self.__init()
        glutDisplayFunc(self.__display)
        glutIdleFunc(self.__display)
        glutReshapeFunc(self.__reshape)
        glutKeyboardFunc(self.__keyBoardEvent)
        glutMouseFunc(self.__mouseEvent)
        glutMainLoop()

    def __keyBoardEvent(self, key, x, y):
        if key in [b'o', b'O', b'p', b'P', b'w', b'W', b's', b'S', b'a', b'A', b'd', b'D', b'r', b'R', b't', b'T', b'f',
                   b'F', b'g', b'G', b'q', b'Q']:
            glMatrixMode(GL_PROJECTION)
            glLoadIdentity()
            if key == b'o' or key == b'O':
                glOrtho(-2, 2, -2, 2, -3, 10)
            elif key == b'p' or key == b'P':
                glFrustum(-2, 2, -2, 2, 3, 10)
            elif key == b'w' or key == b'W':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraAngle[1] = 0
                self.cameraAngle[0] += math.pi / 7.5
                self.cameraPos[0] = 0
                self.cameraPos[1] = math.sin(self.cameraAngle[0]) * self.cameraRadius
                self.cameraPos[2] = math.cos(self.cameraAngle[0]) * self.cameraRadius
                if (self.cameraAngle[0] // (math.pi / 2)) % 4 in [1, 2]:
                    self.cameraUp = -1
                else:
                    self.cameraUp = 1
            elif key == b's' or key == b'S':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraAngle[1] = 0
                self.cameraAngle[0] -= math.pi / 7.5
                self.cameraPos[0] = 0
                self.cameraPos[1] = math.sin(self.cameraAngle[0]) * self.cameraRadius
                self.cameraPos[2] = math.cos(self.cameraAngle[0]) * self.cameraRadius
                if (self.cameraAngle[0] // (math.pi / 2)) % 4 in [1, 2]:
                    self.cameraUp = -1
                else:
                    self.cameraUp = 1
            elif key == b'a' or key == b'A':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraAngle[0] = 0
                self.cameraAngle[1] -= math.pi / 7.5
                self.cameraPos[0] = math.sin(self.cameraAngle[1]) * self.cameraRadius
                self.cameraPos[1] = 0
                self.cameraPos[2] = math.cos(self.cameraAngle[1]) * self.cameraRadius
            elif key == b'd' or key == b'D':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraAngle[0] = 0
                self.cameraAngle[1] += math.pi / 7.5
                self.cameraPos[0] = math.sin(self.cameraAngle[1]) * self.cameraRadius
                self.cameraPos[1] = 0
                self.cameraPos[2] = math.cos(self.cameraAngle[1]) * self.cameraRadius
            elif key == b'r' or key == b'R':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraUp = 1
                self.cameraPos[0] += .2
            elif key == b't' or key == b'T':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraUp = 1
                self.cameraPos[0] -= .2
            elif key == b'f' or key == b'F':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraUp = 1
                self.cameraPos[1] += .2
            elif key == b'g' or key == b'G':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraUp = 1
                self.cameraPos[1] -= .2
            elif key == b'q' or key == b'Q':
                glOrtho(-2, 2, -2, 2, -3, 10)
                self.cameraAngle = [0, 0]
                self.cameraPos = [0, 0, 5]
                self.cameraUp = 1

            gluLookAt(self.cameraPos[0],
                      self.cameraPos[1],
                      self.cameraPos[2], 0, 0, 0, 0, self.cameraUp, 0)
            glMatrixMode(GL_MODELVIEW)
            glLoadIdentity()
        glutPostRedisplay()

    def __init(self):
        glEnable(GL_DEPTH_TEST)
        glDepthRange(-2, 2)
        glShadeModel(GL_SMOOTH)
        glEnable(GL_MULTISAMPLE)
        glEnable(GL_LIGHTING)
        glEnable(GL_NORMALIZE)
        self.__turnLightOn()

    @staticmethod
    def __reshape(width, height):
        glViewport(0, 0, width, height)

        glMatrixMode(GL_PROJECTION)
        glLoadIdentity()
        glOrtho(-2, 2, -2, 2, -3, 10)

        glMatrixMode(GL_MODELVIEW)
        glLoadIdentity()

    @staticmethod
    def __mouseEvent(self, button, xPos, yPos):
        pass

    def __display(self):
        glClearColor(0, 0, 0, 1)
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)

        for sh in self.drawList:
            sh.draw()

        if time.time() - self.seconds >= 4:
            self.shine = not self.shine
            if self.shine:
                self.__turnLightOn()
            else:
                self.__turnLightOff()

        glutSwapBuffers()

    def __turnLightOn(self):
        glEnable(GL_LIGHT0)
        self.seconds = time.time()

    def __turnLightOff(self):
        glDisable(GL_LIGHT0)
        self.seconds = time.time()


if __name__ == '__main__':
    filePath = 'shapes.json'
    ww = Window(filePath)
    ww.initWindow()
 
