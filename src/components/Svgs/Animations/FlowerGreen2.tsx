"use client"

import * as React from "react"
import { motion } from "framer-motion"

export const FlowerGreen2: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 479 478"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      className={className}
    >
      <g id="Leaves">
        <motion.path
          d="M242.99,405.284c0.061,-4.328 17.75,-121.306 -44.773,-198.48c-41.703,-51.474 -51.844,-36.433 -82.437,-110.886c-75.735,226.149 71.67,261.243 127.21,309.366Z"
          style={{
            fill: "#65a30d",
          }}
          animate={{
            y: [0, -50],
            scaleX: [1, 1.4],
            rotate: [0, 20],
          }}
          transition={{
            duration: 3, // Total duration of one loop
            repeat: Infinity, // Loop the animation infinitely
            repeatType: "mirror", // Continue looping from the beginning
          }}
        />
        <motion.path
          d="M242.892,405.284c-0.061,-4.328 -17.75,-121.306 44.773,-198.48c41.703,-51.474 51.844,-36.433 82.437,-110.886c75.735,226.149 -71.669,261.243 -127.21,309.366Z"
          style={{
            fill: "#65a30d",
          }}
          animate={{
            y: [0, -50],
            x: [0, -40],
            scaleX: [1, 1.4],
            rotate: [0, -20],
          }}
          transition={{
            duration: 3, // Total duration of one loop
            repeat: Infinity, // Loop the animation infinitely
            repeatType: "mirror", // Continue looping from the beginning
          }}
        />
      </g>
      <motion.g
        id="Face"
        animate={{
          x: [0, -20],
          y: [-20, 0],
          rotate: [0, 30, -30, 0, 0, 0],
        }}
        transition={{
          duration: 3, // Total duration of one loop
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "mirror", // Continue looping from the beginning
        }}
      >
        <path
          d="M225.292,351.199c-58.857,-1.762 -101.192,-51.577 -105.106,-95.072c-4.698,-52.214 16.398,-87.439 36.912,-113.524c15.648,-19.896 47.327,-40.45 84.878,-39.063c73.045,2.698 97.782,19.775 118.726,71.718c7.574,18.784 20.105,77.13 -4.597,114.031c-34.388,51.371 -56.021,64.149 -130.813,61.91Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          id="Mouth"
          d="M275.639,233.144c1.213,1.123 1.234,1.211 1.297,2.866c0.04,1.06 -0.645,2.025 -1.067,2.998c-0.015,0.035 -2.317,3.059 -3.293,4.254c-8.222,10.075 -19.884,22.388 -35.549,21.012c-8.561,-0.752 -15.425,-6.335 -16.132,-6.874c-7.995,-6.099 -14.272,-15.698 -17.177,-20.247c-2.026,-3.172 -5.144,-8.748 -5.152,-8.784c-0.245,-1.032 -0.838,-2.069 -0.655,-3.113c0.003,-0.017 1.673,-2.67 1.682,-2.672c1.044,-0.239 2.079,-0.893 3.134,-0.708c1.034,0.181 1.804,1.084 2.641,1.719c0.019,0.014 2.634,3.038 5.886,6.434c2.36,2.464 14.686,15.842 24.542,18.766c5.838,1.732 12.986,2.13 30.064,-12.12c1.59,-1.326 1.766,-1.456 3.708,-3.139c1.705,-1.478 2.776,-1.518 3.049,-1.529c1.696,-0.064 1.775,-0.018 3.022,1.137Z"
          style={{
            fill: "#375315",
          }}
        />
        <g id="EyeL">
          <ellipse
            cx={198.099}
            cy={179.768}
            rx={13.908}
            ry={12.881}
            style={{
              fill: "#375315",
            }}
          />
          <ellipse
            cx={200.382}
            cy={176.964}
            rx={4.695}
            ry={4.348}
            style={{
              fill: "#fff",
            }}
          />
        </g>
        <g id="EyeR">
          <ellipse
            cx={284.633}
            cy={184.517}
            rx={14.394}
            ry={13.331}
            style={{
              fill: "#375315",
            }}
          />
          <ellipse
            cx={289.273}
            cy={181.477}
            rx={4.695}
            ry={4.348}
            style={{
              fill: "#fff",
            }}
          />
        </g>
      </motion.g>
      <g id="Leaves1">
        <motion.path
          d="M239.739,404.422c0.076,-3.89 22.403,-109.024 -56.512,-178.385c-52.636,-46.263 -65.437,-32.745 -104.05,-99.66c-95.591,203.253 90.459,234.794 160.562,278.045Z"
          style={{
            fill: "#84cc16",
          }}
          animate={{
            y: [0, -20],
            x: [0, 40],
            scaleX: [1, 1.4],
            rotate: [0, 30],
          }}
          transition={{
            duration: 3, // Total duration of one loop
            repeat: Infinity, // Loop the animation infinitely
            repeatType: "mirror", // Continue looping from the beginning
          }}
        />
        <motion.path
          d="M239.615,404.422c-0.077,-3.89 -22.403,-109.024 56.512,-178.385c52.636,-46.263 65.436,-32.745 104.05,-99.66c95.591,203.253 -90.46,234.794 -160.562,278.045Z"
          style={{
            fill: "#84cc16",
          }}
          animate={{
            y: [0, -20],
            x: [0, -70],
            scaleX: [1, 1.4],
            rotate: [0, -20],
          }}
          transition={{
            duration: 3, // Total duration of one loop
            repeat: Infinity, // Loop the animation infinitely
            repeatType: "mirror", // Continue looping from the beginning
          }}
        />
      </g>
      <motion.g
        id="Pollen1"
        animate={{
          y: [0, -70],
          x: [0, 30],
          rotate: [0, 40],
          opacity: [1, 0],
        }}
        transition={{
          duration: 3, // Total duration of one loop
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Continue looping from the beginning
        }}
      >
        <path
          d="M197.679,149.225c-0.504,0.504 -0.557,0.463 -1.271,0.46c-0.515,-0.002 -1.011,-0.238 -1.473,-0.464c-0.233,-0.113 -7.81,-5.544 -10.279,-8.069c-3.428,-3.504 -6.812,-8.473 -8.051,-10.238c-0.869,-1.239 -0.576,-1.38 -0.052,-2.8c0.003,-0.009 1.256,-0.471 1.277,-0.471c0.511,0 1.015,0.213 1.464,0.458c0.104,0.057 5.886,4.042 9.089,6.944c1.892,1.713 4.295,4.36 9.241,11.363c0.075,0.107 0.511,0.724 0.514,1.546c0.003,0.714 0.044,0.768 -0.459,1.271Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M181.503,145.361c-0.47,-0.47 -0.39,-0.533 -0.387,-1.199c0.002,-0.531 0.216,-1.043 0.392,-1.544c0.084,-0.238 2.806,-5.072 4.287,-6.499c2.082,-2.004 5.355,-3.677 6.466,-4.278c1.293,-0.699 1.384,-0.492 2.778,-0.03c0.008,0.003 0.399,1.181 0.399,1.206c-0,0.527 -0.195,1.043 -0.388,1.535c-0.042,0.108 -2.006,3.854 -3.638,5.786c-0.988,1.169 -2.623,2.536 -7.114,4.991c-0.761,0.416 -1.464,0.419 -1.596,0.419c-0.666,0.003 -0.729,0.083 -1.199,-0.387Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M188.005,148.564c-0.666,0 -0.656,-0.098 -1.127,-0.574c-0.373,-0.376 -0.582,-0.89 -0.809,-1.369c-0.107,-0.228 -1.603,-5.702 -1.564,-7.808c0.055,-2.957 1.185,-6.536 1.547,-7.778c0.411,-1.411 0.627,-1.328 1.943,-1.986c0.008,-0.004 1.124,0.553 1.141,0.57c0.372,0.373 0.597,0.876 0.806,1.36c0.045,0.106 1.305,4.241 1.518,6.822c0.128,1.559 -0.061,3.731 -1.502,8.763c-0.238,0.834 -0.733,1.333 -0.825,1.426c-0.471,0.476 -0.461,0.574 -1.128,0.574Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M199.283,138.207c0,0.683 -0.089,0.679 -0.573,1.159c-0.373,0.37 -0.888,0.569 -1.37,0.777c-0.228,0.099 -6.574,1.603 -9.014,1.564c-3.411,-0.055 -7.532,-1.181 -8.981,-1.547c-1.438,-0.363 -1.345,-0.608 -1.994,-1.943c-0.004,-0.009 0.554,-1.157 0.57,-1.173c0.369,-0.368 0.873,-0.586 1.36,-0.774c0.105,-0.041 4.889,-1.305 7.876,-1.518c1.788,-0.127 4.284,0.055 10.119,1.501c0.845,0.21 1.341,0.702 1.434,0.794c0.484,0.48 0.573,0.476 0.573,1.16Z"
          style={{
            fill: "#f59e0b",
          }}
        />
      </motion.g>
      <motion.g
        id="Pollen2"
        animate={{
          y: [0, -90],
          x: [0, 20],
          rotate: [0, 200],
          opacity: [1, 0],
        }}
        transition={{
          duration: 2, // Total duration of one loop
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Continue looping from the beginning
        }}
      >
        <path
          d="M216.282,145.547c-0.7,0.006 -0.702,-0.073 -1.197,-0.564c-0.369,-0.366 -0.564,-0.88 -0.757,-1.363c-0.093,-0.232 -1.668,-7.73 -1.653,-10.615c0.02,-4.019 1.102,-8.877 1.457,-10.606c0.301,-1.467 0.578,-1.368 1.926,-2.02c0.008,-0.003 1.193,0.545 1.208,0.56c0.369,0.362 0.584,0.866 0.755,1.353c0.038,0.107 1.353,5.747 1.596,9.275c0.145,2.095 -0.007,5.03 -1.399,11.947c-0.026,0.128 -0.173,0.858 -0.75,1.449c-0.486,0.499 -0.487,0.578 -1.186,0.584Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M207.56,131.377c-0,-0.665 0.1,-0.653 0.573,-1.122c0.378,-0.374 0.891,-0.585 1.37,-0.815c0.228,-0.109 5.57,-1.602 7.626,-1.563c2.89,0.054 6.387,1.185 7.598,1.546c1.408,0.42 1.326,0.631 1.985,1.944c0.004,0.008 -0.553,1.117 -0.57,1.134c-0.373,0.373 -0.876,0.6 -1.36,0.812c-0.107,0.046 -4.144,1.306 -6.664,1.518c-1.525,0.128 -3.648,-0.061 -8.56,-1.501c-0.832,-0.244 -1.331,-0.739 -1.425,-0.832c-0.473,-0.469 -0.573,-0.457 -0.573,-1.121Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M209.892,138.239c-0.471,-0.471 -0.394,-0.534 -0.391,-1.203c0.002,-0.53 0.218,-1.041 0.397,-1.54c0.084,-0.237 2.898,-5.165 4.414,-6.626c2.13,-2.053 5.46,-3.784 6.594,-4.407c1.289,-0.707 1.382,-0.496 2.778,-0.03c0.009,0.003 0.404,1.185 0.404,1.209c-0,0.527 -0.197,1.042 -0.392,1.532c-0.043,0.107 -2.075,3.922 -3.75,5.897c-1.012,1.193 -2.681,2.596 -7.258,5.135c-0.759,0.421 -1.461,0.424 -1.593,0.425c-0.669,0.003 -0.731,0.08 -1.203,-0.392Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M225.191,138.89c-0.483,0.484 -0.544,0.418 -1.226,0.415c-0.525,-0.003 -1.029,-0.227 -1.517,-0.42c-0.232,-0.091 -5.782,-3.515 -7.48,-5.268c-2.373,-2.45 -4.49,-6.161 -5.257,-7.445c-0.76,-1.273 -0.521,-1.38 -0.035,-2.783c0.003,-0.009 1.209,-0.426 1.232,-0.426c0.521,0 1.032,0.203 1.509,0.414c0.103,0.046 4.379,2.534 6.642,4.496c1.354,1.174 2.991,3.067 6.094,8.217c0.449,0.745 0.452,1.443 0.453,1.574c0.003,0.682 0.069,0.743 -0.415,1.226Z"
          style={{
            fill: "#f59e0b",
          }}
        />
      </motion.g>
      <motion.g
        id="Pollen3"
        animate={{
          y: [0, -100],
          x: [0, 40],
          rotate: [0, 60],
          opacity: [1, 0],
        }}
        transition={{
          duration: 1.5, // Total duration of one loop
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Continue looping from the beginning
        }}
      >
        <path
          d="M256.74,121.134c-0.279,-0.641 -0.207,-0.674 0.051,-1.322c0.192,-0.482 0.59,-0.863 0.959,-1.229c0.177,-0.177 6.461,-4.559 9.122,-5.675c3.707,-1.553 8.6,-2.458 10.331,-2.808c1.467,-0.297 1.485,-0.002 2.611,0.983c0.007,0.006 -0.034,1.311 -0.041,1.331c-0.19,0.48 -0.569,0.876 -0.951,1.224c-0.084,0.076 -4.759,3.493 -7.911,5.097c-1.872,0.952 -4.632,1.961 -11.542,3.385c-0.128,0.027 -0.857,0.177 -1.627,-0.122c-0.649,-0.252 -0.723,-0.223 -1.002,-0.864Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M266.369,107.564c0.612,-0.26 0.641,-0.163 1.257,0.089c0.492,0.201 0.887,0.591 1.286,0.942c0.189,0.167 3.654,4.499 4.422,6.407c1.08,2.68 1.407,6.342 1.549,7.597c0.164,1.46 -0.062,1.467 -1.012,2.587c-0.006,0.007 -1.245,-0.071 -1.267,-0.081c-0.49,-0.198 -0.895,-0.571 -1.279,-0.934c-0.085,-0.08 -2.823,-3.302 -4.004,-5.539c-0.715,-1.353 -1.371,-3.381 -1.967,-8.465c-0.101,-0.861 0.159,-1.514 0.208,-1.636c0.246,-0.619 0.196,-0.707 0.807,-0.967Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M260.966,112.395c0.25,-0.618 0.337,-0.571 0.954,-0.83c0.489,-0.206 1.044,-0.207 1.573,-0.238c0.251,-0.015 5.887,0.647 7.825,1.471c2.722,1.157 5.619,3.544 6.635,4.344c1.155,0.91 0.997,1.078 1.114,2.545c0.001,0.009 -0.932,0.835 -0.954,0.845c-0.486,0.205 -1.036,0.227 -1.563,0.238c-0.116,0.003 -4.422,-0.375 -6.895,-1.144c-1.493,-0.465 -3.437,-1.452 -7.565,-4.671c-0.684,-0.533 -0.961,-1.178 -1.013,-1.299c-0.265,-0.615 -0.36,-0.642 -0.111,-1.261Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M266.352,126.73c-0.634,-0.256 -0.597,-0.338 -0.861,-0.966c-0.203,-0.484 -0.195,-1.037 -0.208,-1.561c-0.006,-0.249 0.974,-6.696 1.923,-8.944c1.326,-3.143 3.913,-6.543 4.795,-7.751c0.874,-1.198 1.066,-1.019 2.547,-1.121c0.009,-0.001 0.866,0.946 0.874,0.966c0.204,0.481 0.217,1.03 0.21,1.551c-0.002,0.113 -0.619,5.022 -1.54,7.872c-0.55,1.706 -1.653,3.953 -5.178,8.823c-0.51,0.705 -1.151,0.981 -1.272,1.032c-0.626,0.27 -0.656,0.354 -1.29,0.099Z"
          style={{
            fill: "#f59e0b",
          }}
        />
      </motion.g>
      <motion.g
        id="Pollen4"
        animate={{
          y: [0, -80],
          x: [0, -40],
          rotate: [0, 120],
          opacity: [1, 0],
        }}
        transition={{
          duration: 3, // Total duration of one loop
          repeat: Infinity, // Loop the animation infinitely
          repeatType: "loop", // Continue looping from the beginning
        }}
      >
        <path
          d="M311.808,130.121c0.251,-0.633 0.335,-0.593 0.957,-0.859c0.484,-0.207 1.037,-0.205 1.563,-0.227c0.249,-0.01 6.46,0.834 8.622,1.731c3.025,1.256 6.291,3.762 7.448,4.612c0.105,0.077 0.702,0.516 1.027,1.266c0.108,0.248 1.026,2.365 -2.402,2.373c-0.113,0 -4.846,-0.514 -7.589,-1.372c-1.645,-0.514 -3.809,-1.567 -8.48,-4.97c-0.702,-0.512 -0.983,-1.153 -1.036,-1.273c-0.272,-0.62 -0.36,-0.649 -0.11,-1.281Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M325.116,125.66c0.603,0.281 0.55,0.367 0.775,0.994c0.179,0.5 0.153,1.055 0.16,1.586c0.002,0.252 -0.9,5.726 -1.803,7.573c-1.27,2.596 -3.773,5.289 -4.611,6.233c-0.975,1.099 -1.132,0.936 -2.6,0.979c-0.009,0 -0.779,-0.973 -0.788,-0.996c-0.18,-0.496 -0.174,-1.047 -0.161,-1.575c0.003,-0.116 0.566,-4.308 1.438,-6.682c0.528,-1.436 1.596,-3.281 4.976,-7.125c0.572,-0.651 1.232,-0.895 1.355,-0.94c0.625,-0.231 0.657,-0.327 1.259,-0.047Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M317.911,124.877c0.626,-0.228 0.65,-0.132 1.255,0.153c0.48,0.226 0.852,0.637 1.229,1.01c0.179,0.177 3.458,4.808 4.142,6.8c0.961,2.797 1.124,6.547 1.209,7.838c0.097,1.466 -0.133,1.462 -1.145,2.531c-0.007,0.007 -1.245,-0.135 -1.267,-0.145c-0.477,-0.223 -0.861,-0.618 -1.223,-1.002c-0.079,-0.084 -2.678,-3.537 -3.761,-5.89c-0.655,-1.421 -1.221,-3.526 -1.59,-8.748c-0.061,-0.865 0.233,-1.503 0.288,-1.622c0.28,-0.608 0.236,-0.697 0.863,-0.925Z"
          style={{
            fill: "#f59e0b",
          }}
        />
        <path
          d="M310.86,138.469c-0.234,-0.642 -0.149,-0.669 0.142,-1.286c0.223,-0.475 0.639,-0.838 1.021,-1.199c0.18,-0.17 5.628,-3.756 7.933,-4.554c3.224,-1.117 7.482,-1.469 8.969,-1.622c1.475,-0.151 1.471,0.111 2.538,1.144c0.007,0.006 -0.124,1.276 -0.134,1.296c-0.22,0.473 -0.62,0.85 -1.012,1.193c-0.086,0.075 -4.147,2.9 -6.881,4.123c-1.636,0.731 -4.044,1.415 -10.022,2.053c-0.865,0.093 -1.499,-0.2 -1.618,-0.254c-0.62,-0.286 -0.702,-0.251 -0.936,-0.894Z"
          style={{
            fill: "#f59e0b",
          }}
        />
      </motion.g>
    </svg>
  )
}
