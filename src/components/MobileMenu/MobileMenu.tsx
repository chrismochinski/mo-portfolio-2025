import { useEffect, useState } from 'react';
import { useMobileMenuStyles, colors, useSiteContext, useGlobalStyles } from '@mo';

export function MobileMenu() {
  const { isNavigationVisible } = useSiteContext();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileMenuHovered, setMobileMenuHovered] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowMobileMenu(window.innerWidth < 800);
    };
    checkScreenSize(); // Run once on mount
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const { classes, cx } = useMobileMenuStyles({ isNavigationVisible });
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <svg
      id="mobile-menu-svg"
      className={cx(classes.mobileMenu, !showMobileMenu || (!isNavigationVisible && 'hidden'))}
      width="6200"
      height="6200"
      viewBox="0 0 6200 6200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setMobileMenuHovered(true)}
      onMouseLeave={() => setMobileMenuHovered(false)}
    >
      <g>
        <path
          id="legs"
          d="M3003.08 2919.26C3024.3 2820.17 3165.7 2820.17 3186.92 2919.26L3855.89 6043.49C3857.49 6050.96 3851.8 6058 3844.16 6058H3689.86C3684.16 6058 3679.25 6053.99 3678.11 6048.4L3097.93 3202.59C3097.28 3199.39 3092.71 3199.38 3092.05 3202.58L2507.52 6048.41C2506.38 6053.99 2501.47 6058 2495.77 6058H2345.84C2338.2 6058 2332.51 6050.96 2334.11 6043.49L3003.08 2919.26Z"
          fill={colors.black}
        />
        <g
          id="cars"
          className={cx(
            globalClasses.slowSpin,
            classes.mobileMenuCars,
            mobileMenuHovered && globalClasses.pauseAnimation
          )}
        >
          <g
            id="car-9"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M1316.93 1164.09V1347.3C1316.93 1397.12 1352.75 1437.47 1396.89 1437.47H2076.97C2121.15 1437.47 2156.93 1397.07 2156.93 1347.3V1164.09C2156.93 1149.21 2146.23 1137.15 2133.03 1137.15H1861.7C1839.17 1137.15 1820.91 1157.74 1820.91 1183.15V1241.31C1820.91 1266.71 1802.65 1287.31 1780.12 1287.31H1693.78C1671.25 1287.31 1652.99 1266.71 1652.99 1241.31V1183.15C1652.99 1157.74 1634.73 1137.15 1612.2 1137.15H1340.87C1327.67 1137.15 1316.97 1149.21 1316.97 1164.09H1316.93Z"
              fill={colors.black}
            />
            <path
              d="M2238.55 578.518C2159.21 508.17 2057.08 468.953 1950.9 468.953L1835.39 468.953L1838.82 603.977H2229.05C2242.25 603.977 2248.54 587.317 2238.6 578.518H2238.55Z"
              fill={colors.black}
            />
            <path
              d="M1245.24 603.977L1838.82 603.977L1835.39 468.953L1523.35 468.953C1417.17 468.953 1315.03 508.125 1235.69 578.518C1225.75 587.317 1232 603.977 1245.24 603.977Z"
              fill={colors.black}
            />
            <path d="M1761 618H1714V1260H1761V618Z" fill={colors.black} />
          </g>
          <g
            id="car-8"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M321.93 2425.09V2608.3C321.93 2658.12 357.749 2698.47 401.886 2698.47H1081.97C1126.15 2698.47 1161.93 2658.07 1161.93 2608.3V2425.09C1161.93 2410.21 1151.23 2398.15 1138.03 2398.15H866.702C844.172 2398.15 825.91 2418.74 825.91 2444.15V2502.31C825.91 2527.71 807.648 2548.31 785.118 2548.31H698.782C676.252 2548.31 657.99 2527.71 657.99 2502.31V2444.15C657.99 2418.74 639.728 2398.15 617.198 2398.15H345.868C332.667 2398.15 321.974 2410.21 321.974 2425.09H321.93Z"
              fill={colors.black}
            />
            <path
              d="M1243.55 1839.52C1164.21 1769.17 1062.08 1729.95 955.896 1729.95L840.385 1729.95L843.818 1864.98H1234.05C1247.25 1864.98 1253.54 1848.32 1243.6 1839.52H1243.55Z"
              fill={colors.black}
            />
            <path
              d="M250.243 1864.98L843.818 1864.98L840.385 1729.95L528.35 1729.95C422.168 1729.95 320.034 1769.12 240.694 1839.52C230.749 1848.32 236.998 1864.98 250.243 1864.98Z"
              fill={colors.black}
            />
            <path d="M766 1879H719V2521H766V1879Z" fill={colors.black} />
          </g>
          <g
            id="car-7"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M307.93 3904.09V4087.3C307.93 4137.12 343.749 4177.47 387.886 4177.47H1067.97C1112.15 4177.47 1147.93 4137.07 1147.93 4087.3V3904.09C1147.93 3889.21 1137.23 3877.15 1124.03 3877.15H852.702C830.172 3877.15 811.91 3897.74 811.91 3923.15V3981.31C811.91 4006.71 793.648 4027.31 771.118 4027.31H684.782C662.252 4027.31 643.99 4006.71 643.99 3981.31V3923.15C643.99 3897.74 625.728 3877.15 603.198 3877.15H331.868C318.667 3877.15 307.974 3889.21 307.974 3904.09H307.93Z"
              fill={colors.black}
            />
            <path
              d="M1229.55 3318.52C1150.21 3248.17 1048.08 3208.95 941.896 3208.95L826.385 3208.95L829.818 3343.98H1220.05C1233.25 3343.98 1239.54 3327.32 1229.6 3318.52H1229.55Z"
              fill={colors.black}
            />
            <path
              d="M236.243 3343.98L829.818 3343.98L826.385 3208.95L514.35 3208.95C408.168 3208.95 306.034 3248.12 226.694 3318.52C216.749 3327.32 222.998 3343.98 236.243 3343.98Z"
              fill={colors.black}
            />
            <path d="M752 3358H705V4000H752V3358Z" fill={colors.black} />
          </g>
          <g
            id="car-6"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M1210.93 5213.09V5396.3C1210.93 5446.12 1246.75 5486.47 1290.89 5486.47H1970.97C2015.15 5486.47 2050.93 5446.07 2050.93 5396.3V5213.09C2050.93 5198.21 2040.23 5186.15 2027.03 5186.15H1755.7C1733.17 5186.15 1714.91 5206.74 1714.91 5232.15V5290.31C1714.91 5315.71 1696.65 5336.31 1674.12 5336.31H1587.78C1565.25 5336.31 1546.99 5315.71 1546.99 5290.31V5232.15C1546.99 5206.74 1528.73 5186.15 1506.2 5186.15H1234.87C1221.67 5186.15 1210.97 5198.21 1210.97 5213.09H1210.93Z"
              fill={colors.black}
            />
            <path
              d="M2132.55 4627.52C2053.21 4557.17 1951.08 4517.95 1844.9 4517.95L1729.39 4517.95L1732.82 4652.98H2123.05C2136.25 4652.98 2142.54 4636.32 2132.6 4627.52H2132.55Z"
              fill={colors.black}
            />
            <path
              d="M1139.24 4652.98L1732.82 4652.98L1729.39 4517.95L1417.35 4517.95C1311.17 4517.95 1209.03 4557.12 1129.69 4627.52C1119.75 4636.32 1126 4652.98 1139.24 4652.98Z"
              fill={colors.black}
            />
            <path d="M1655 4667H1608V5309H1655L1655 4667Z" fill={colors.black} />
          </g>
          <g
            id="car-5"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M2660.93 5683.09V5866.3C2660.93 5916.12 2696.75 5956.47 2740.89 5956.47H3420.97C3465.15 5956.47 3500.93 5916.07 3500.93 5866.3V5683.09C3500.93 5668.21 3490.23 5656.15 3477.03 5656.15H3205.7C3183.17 5656.15 3164.91 5676.74 3164.91 5702.15V5760.31C3164.91 5785.71 3146.65 5806.31 3124.12 5806.31H3037.78C3015.25 5806.31 2996.99 5785.71 2996.99 5760.31V5702.15C2996.99 5676.74 2978.73 5656.15 2956.2 5656.15H2684.87C2671.67 5656.15 2660.97 5668.21 2660.97 5683.09H2660.93Z"
              fill={colors.black}
            />
            <path
              d="M3582.55 5097.52C3503.21 5027.17 3401.08 4987.95 3294.9 4987.95L3179.39 4987.95L3182.82 5122.98H3573.05C3586.25 5122.98 3592.54 5106.32 3582.6 5097.52H3582.55Z"
              fill={colors.black}
            />
            <path
              d="M2589.24 5122.98L3182.82 5122.98L3179.39 4987.95L2867.35 4987.95C2761.17 4987.95 2659.03 5027.12 2579.69 5097.52C2569.75 5106.32 2576 5122.98 2589.24 5122.98Z"
              fill={colors.black}
            />
            <path d="M3105 5137H3058V5779H3105V5137Z" fill={colors.black} />
          </g>
          <g
            id="car-4"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M4060.93 5250.09V5433.3C4060.93 5483.12 4096.75 5523.47 4140.89 5523.47H4820.97C4865.15 5523.47 4900.93 5483.07 4900.93 5433.3V5250.09C4900.93 5235.21 4890.23 5223.15 4877.03 5223.15H4605.7C4583.17 5223.15 4564.91 5243.74 4564.91 5269.15V5327.31C4564.91 5352.71 4546.65 5373.31 4524.12 5373.31H4437.78C4415.25 5373.31 4396.99 5352.71 4396.99 5327.31V5269.15C4396.99 5243.74 4378.73 5223.15 4356.2 5223.15H4084.87C4071.67 5223.15 4060.97 5235.21 4060.97 5250.09H4060.93Z"
              fill={colors.black}
            />
            <path
              d="M4982.55 4664.52C4903.21 4594.17 4801.08 4554.95 4694.9 4554.95L4579.39 4554.95L4582.82 4689.98H4973.05C4986.25 4689.98 4992.54 4673.32 4982.6 4664.52H4982.55Z"
              fill={colors.black}
            />
            <path
              d="M3989.24 4689.98L4582.82 4689.98L4579.39 4554.95L4267.35 4554.95C4161.17 4554.95 4059.03 4594.12 3979.69 4664.52C3969.75 4673.32 3976 4689.98 3989.24 4689.98Z"
              fill={colors.black}
            />
            <path d="M4505 4704H4458V5346H4505V4704Z" fill={colors.black} />
          </g>
          <g
            id="car-3"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M5019 3983.95V4167.15C5019 4216.98 5054.82 4257.32 5098.96 4257.32H5779.04C5823.22 4257.32 5859 4216.93 5859 4167.15V3983.95C5859 3969.06 5848.3 3957 5835.1 3957H5563.77C5541.24 3957 5522.98 3977.59 5522.98 4003V4061.16C5522.98 4086.57 5504.72 4107.16 5482.19 4107.16H5395.85C5373.32 4107.16 5355.06 4086.57 5355.06 4061.16V4003C5355.06 3977.59 5336.8 3957 5314.27 3957H5042.94C5029.74 3957 5019.04 3969.06 5019.04 3983.95H5019Z"
              fill={colors.black}
            />
            <path
              d="M5940.55 3397.52C5861.21 3327.17 5759.08 3287.95 5652.9 3287.95L5537.39 3287.95L5540.82 3422.98H5931.05C5944.25 3422.98 5950.54 3406.32 5940.6 3397.52H5940.55Z"
              fill={colors.black}
            />
            <path
              d="M4947.24 3422.98L5540.82 3422.98L5537.39 3287.95L5225.35 3287.95C5119.17 3287.95 5017.03 3327.12 4937.69 3397.52C4927.75 3406.32 4934 3422.98 4947.24 3422.98Z"
              fill={colors.black}
            />
            <path d="M5463 3437H5416V4079H5463V3437Z" fill={colors.black} />
          </g>
          <g
            id="car-2"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M5042.93 2438.09V2621.3C5042.93 2671.12 5078.75 2711.47 5122.89 2711.47H5802.97C5847.15 2711.47 5882.93 2671.07 5882.93 2621.3V2438.09C5882.93 2423.21 5872.23 2411.15 5859.03 2411.15H5587.7C5565.17 2411.15 5546.91 2431.74 5546.91 2457.15V2515.31C5546.91 2540.71 5528.65 2561.31 5506.12 2561.31H5419.78C5397.25 2561.31 5378.99 2540.71 5378.99 2515.31V2457.15C5378.99 2431.74 5360.73 2411.15 5338.2 2411.15H5066.87C5053.67 2411.15 5042.97 2423.21 5042.97 2438.09H5042.93Z"
              fill={colors.black}
            />
            <path
              d="M5964.55 1852.52C5885.21 1782.17 5783.08 1742.95 5676.9 1742.95L5561.39 1742.95L5564.82 1877.98H5955.05C5968.25 1877.98 5974.54 1861.32 5964.6 1852.52H5964.55Z"
              fill={colors.black}
            />
            <path
              d="M4971.24 1877.98L5564.82 1877.98L5561.39 1742.95L5249.35 1742.95C5143.17 1742.95 5041.03 1782.12 4961.69 1852.52C4951.75 1861.32 4958 1877.98 4971.24 1877.98Z"
              fill={colors.black}
            />
            <path d="M5487 1892H5440V2534H5487V1892Z" fill={colors.black} />
          </g>
          <g
            id="car-1"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M4101.93 1178.09V1361.3C4101.93 1411.12 4137.75 1451.47 4181.89 1451.47H4861.97C4906.15 1451.47 4941.93 1411.07 4941.93 1361.3V1178.09C4941.93 1163.21 4931.23 1151.15 4918.03 1151.15H4646.7C4624.17 1151.15 4605.91 1171.74 4605.91 1197.15V1255.31C4605.91 1280.71 4587.65 1301.31 4565.12 1301.31H4478.78C4456.25 1301.31 4437.99 1280.71 4437.99 1255.31V1197.15C4437.99 1171.74 4419.73 1151.15 4397.2 1151.15H4125.87C4112.67 1151.15 4101.97 1163.21 4101.97 1178.09H4101.93Z"
              fill={colors.black}
            />
            <path
              d="M5023.55 592.518C4944.21 522.17 4842.08 482.953 4735.9 482.953L4620.39 482.953L4623.82 617.977H5014.05C5027.25 617.977 5033.54 601.317 5023.6 592.518H5023.55Z"
              fill={colors.black}
            />
            <path
              d="M4030.24 617.977L4623.82 617.977L4620.39 482.953L4308.35 482.953C4202.17 482.953 4100.03 522.125 4020.69 592.518C4010.75 601.317 4017 617.977 4030.24 617.977Z"
              fill={colors.black}
            />
            <path d="M4546 632H4499V1274H4546V632Z" fill={colors.black} />
          </g>
          <g
            id="car-0"
            className={cx(
              globalClasses.slowSpinReverse,
              classes.mobileMenuCar,
              mobileMenuHovered && 'ferrisWheelPause'
            )}
          >
            <path
              d="M2660.93 727.094V910.303C2660.93 960.125 2696.75 1000.47 2740.89 1000.47H3420.97C3465.15 1000.47 3500.93 960.075 3500.93 910.303V727.094C3500.93 712.207 3490.23 700.148 3477.03 700.148H3205.7C3183.17 700.148 3164.91 720.742 3164.91 746.149V804.308C3164.91 829.715 3146.65 850.308 3124.12 850.308H3037.78C3015.25 850.308 2996.99 829.715 2996.99 804.308V746.149C2996.99 720.742 2978.73 700.148 2956.2 700.148H2684.87C2671.67 700.148 2660.97 712.207 2660.97 727.094H2660.93Z"
              fill={colors.black}
            />
            <path
              d="M3582.55 141.518C3503.21 71.1697 3401.08 31.9531 3294.9 31.9531L3179.39 31.9531L3182.82 166.977H3573.05C3586.25 166.977 3592.54 150.317 3582.6 141.518H3582.55Z"
              fill={colors.black}
            />
            <path
              d="M2589.24 166.977L3182.82 166.977L3179.39 31.9531L2867.35 31.9531C2761.17 31.9531 2659.03 71.1248 2579.69 141.518C2569.75 150.317 2576 166.977 2589.24 166.977Z"
              fill={colors.black}
            />
            <path d="M3105 181H3058V823H3105V181Z" fill={colors.black} />
          </g>
        </g>
        <g
          id="bars"
          className={cx(
            globalClasses.slowSpin,
            classes.mobileMenuBars,
            mobileMenuHovered && globalClasses.pauseAnimation
          )}
        >
          <path
            id="bar-4"
            d="M750.96 2055.09C750.442 2054.91 750.16 2054.36 750.329 2053.84C752.26 2047.88 762.982 2014.89 770.381 1993.04C777.78 1971.19 789.315 1938.47 791.397 1932.57C791.58 1932.05 792.142 1931.78 792.66 1931.96L5478.23 3518.8C5478.75 3518.98 5479.03 3519.54 5478.86 3520.06C5476.93 3526.01 5466.19 3559.04 5458.81 3580.85C5451.42 3602.66 5439.88 3635.42 5437.79 3641.32C5437.61 3641.84 5437.05 3642.11 5436.53 3641.93L750.96 2055.09Z"
            fill={colors.black}
          />
          <path
            id="bar-3"
            d="M1679.49 784.078C1679.18 783.626 1679.29 783.011 1679.74 782.697C1684.86 779.104 1713.27 759.191 1732.33 746.186C1751.38 733.181 1780.27 713.977 1785.48 710.516C1785.94 710.213 1786.55 710.334 1786.86 710.786L4575.88 4796.61C4576.19 4797.07 4576.08 4797.68 4575.63 4798C4570.51 4801.59 4542.07 4821.52 4523.05 4834.51C4504.03 4847.49 4475.11 4866.71 4469.89 4870.18C4469.43 4870.48 4468.82 4870.36 4468.51 4869.91L1679.49 784.078Z"
            fill={colors.black}
          />
          <path
            id="bar-2"
            d="M755.855 3565.38C755.332 3565.54 754.778 3565.26 754.609 3564.74C752.684 3558.78 742.024 3525.77 735.208 3503.73C728.392 3481.69 718.552 3448.42 716.779 3442.42C716.624 3441.9 716.921 3441.35 717.443 3441.19L5443.55 1979.47C5444.07 1979.31 5444.62 1979.6 5444.79 1980.12C5446.72 1986.08 5457.39 2019.13 5464.19 2041.13C5471 2063.12 5480.85 2096.43 5482.62 2102.43C5482.78 2102.96 5482.48 2103.51 5481.96 2103.67L755.855 3565.38Z"
            fill={colors.black}
          />
          <path
            id="bar-1"
            d="M1682.38 4823.78C1682.06 4824.22 1681.44 4824.33 1681 4824.01C1675.89 4820.4 1647.56 4800.36 1628.9 4786.8C1610.24 4773.25 1582.42 4752.52 1577.4 4748.78C1576.96 4748.45 1576.87 4747.83 1577.19 4747.39L4484.12 744.587C4484.44 744.144 4485.06 744.041 4485.5 744.357C4490.61 747.971 4518.97 768.031 4537.6 781.562C4556.23 795.092 4584.08 815.847 4589.1 819.59C4589.54 819.917 4589.63 820.534 4589.31 820.977L1682.38 4823.78Z"
            fill={colors.black}
          />
          <path
            id="bar-0"
            d="M3142.15 5276.49C3142.15 5277.04 3141.71 5277.48 3141.17 5277.49C3134.91 5277.57 3100.22 5278 3077.15 5278C3054.08 5278 3019.39 5277.57 3013.13 5277.49C3012.59 5277.48 3012.15 5277.04 3012.15 5276.49L3012.15 329.508C3012.15 328.961 3012.59 328.515 3013.14 328.508C3019.4 328.429 3054.12 328 3077.15 328C3100.18 328 3134.91 328.429 3141.17 328.508C3141.71 328.515 3142.15 328.961 3142.15 329.508L3142.15 5276.49Z"
            fill={colors.black}
          />
        </g>
        <g id="wheels">
          <g id="outer-wheel">
            <circle
              id="outer-wheel-mask"
              cx="3099.5"
              cy="2802.5"
              r="2475.5"
              stroke={colors.white}
              strokeWidth="375"
            />
            <circle
              id="black"
              cx="3099.5"
              cy="2802.5"
              r="2475.5"
              stroke={colors.black}
              strokeWidth="225"
            />
          </g>
          <circle
            id="middle-wheel"
            cx="3099.5"
            cy="2802.5"
            r="1542.5"
            stroke={colors.black}
            strokeWidth="231"
          />
          <circle
            id="inner-wheel"
            cx="3099.5"
            cy="2802.5"
            r="876.5"
            stroke={colors.black}
            strokeWidth="218"
          />
          <circle id="center-wheel" cx="3094" cy="2803" r="575" fill={colors.black} />
        </g>
        <path
          id="base-legs"
          d="M3023.59 2787.65C3045.89 2718.23 3144.11 2718.23 3166.41 2787.66L4237.97 6124.23C4240.46 6131.98 4234.68 6139.9 4226.54 6139.9H4039.59C4034.33 6139.9 4029.68 6136.48 4028.12 6131.45L3107.38 3162.34C3103.6 3150.15 3086.35 3150.13 3082.55 3162.32L2155.82 6131.47C2154.25 6136.49 2149.61 6139.9 2144.36 6139.9H1963.46C1955.32 6139.9 1949.54 6131.98 1952.03 6124.23L3023.59 2787.65Z"
          fill={colors.black}
        />
      </g>
    </svg>
  );
}
