module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
		plugins: [
			[
				'module-resolver',
				{
					root: '.',
					alias: {
						'@components': './src/components',
						'@hooks': './src/hooks',
						'@routes': './src/routes',
						'@screens': './src/screens',
						'@theme': './src/theme',
						'@domain': './src/domain',
						'@api': './src/api',
						'@types': './src/types',
						'@lib': './src/lib',
					},
				},
			],
			'react-native-reanimated/plugin',
		]
  };
};
