import {
  Canvas,
  Group,
  Path,
  Skia,
  useClockValue,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';
import { curveBasis, line } from 'd3';
import React, { useEffect } from 'react';
import {Colors} from '../../Theme';

const waveGlass = ({ size = 320, progress =80 }) => {
  const padding = size / 125;
  const innerCircleSize = size - padding * 2;
  const frequency = 4;
  const amplitude = 15;
  const verticalOffset = useValue(100);
  const clock = useClockValue();

  useEffect(() => {
    verticalOffset.current = (1 - progress / 100) * innerCircleSize;
  }, [progress, innerCircleSize]);

  const createAnimatedPath = (phase = 20) => {
    const d3Points = Array.from({ length: size }).map((_, i) => {
      const angle = (i / size) * (Math.PI * frequency) + phase;
      return [i, (Math.sin(angle) * amplitude) / 2 + verticalOffset.current];
    });
    const lineGenerator = line().curve(curveBasis);
    const wavePath = lineGenerator(d3Points);
    return `${wavePath} L ${size}, ${size} 0, ${size} Z`;
  };


  const animatedPath = useComputedValue(() => {
    const current = (clock.current / 250) % 200;
    const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current));
    const end = Skia.Path.MakeFromSVGString(
      createAnimatedPath(current * Math.PI)
    );
    return start.interpolate(end, 0.5);
  }, [clock, size]);
  const animatedPath2 = useComputedValue(() => {
    const current = (clock.current / 250) % 200;
    const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current));
    const end = Skia.Path.MakeFromSVGString(
      createAnimatedPath(current )
    );
    return start.interpolate(end, 0.5);
  }, [clock, size]);
  const glassPath = Skia.Path.Make();
  const glassTopWidth = innerCircleSize * 0.6;
  const glassBottomWidth = innerCircleSize * 0.4;
  const glassHeight = innerCircleSize * 0.8;
  const glassX = 1;
  const glassY = 1;

  glassPath.moveTo(glassX, glassY);
  glassPath.lineTo(glassX + glassTopWidth, glassY);
  glassPath.lineTo(glassX + glassBottomWidth + 25, glassY + glassHeight);
  glassPath.lineTo(glassX + 35, glassY + glassHeight);
  glassPath.close();

  return (
    <Canvas style={{ width: size - 130, height: size - 65, backgroundColor: Colors.main }}>
      <Group clip={glassPath}>
        <Path path={animatedPath} color={Colors.glassBlue1} />
        <Path path={animatedPath2} color={Colors.glassBlue2} />

      </Group>
      <Path path={glassPath} color={Colors.dark} style="stroke" strokeWidth={1} />
    </Canvas>
  );
};

export default waveGlass;
