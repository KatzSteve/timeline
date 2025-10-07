import type {PlayerRef} from '@remotion/player';
import {useRef} from 'react';
import {PreviewContainer} from './layout';
import {ActionRow} from './timeline/remotion-timeline/components/action-row';
import {
	Timeline,
	TimelineContainer,
} from './timeline/remotion-timeline/components/timeline';
import {
	TimelineProvider,
	type TimelineInitialState,
} from './timeline/remotion-timeline/context/provider';
import {TimelineSizeProvider} from './timeline/remotion-timeline/context/timeline-size-provider';
import {TimelineZoomProvider} from './timeline/remotion-timeline/context/timeline-zoom-provider';
import {useElementSize} from './timeline/remotion-timeline/hooks/use-element-size';
import {TrackType} from './timeline/remotion-timeline/types';
import {timelineContainerRef} from './timeline/remotion-timeline/utils/restore-scroll-after-zoom';
import {VideoPreview} from './timeline/video-preview';

/**
 * This is the initial state of the timeline.
 * It's here to show you how to initialize the timeline with data.
 * You can change the shape of the data to fit your needs.
 */
const INITIAL_TRACKS: TrackType[] = [
	{
		items: [],
		id: '1',
		name: 'Track 3',
	},
	{
		items: [],
		id: '2',
		name: 'Track 2',
	},
	{
		items: [
			{
				id: '1',
				durationInFrames: 58,
				from: 0,
				type: 'video',
				videoUrl: 'https://parser.media/video.mp4',
				isDragging: false,
				videoDurationInSeconds: 5,
				videoStartFromInSeconds: 0,
				aspectRatio: 16 / 9,
			},
			{
				id: '2',
				durationInFrames: 92,
				from: 58,
				type: 'image',
				imgUrl: '/remotion-banner.png',
				isDragging: false,
			},
			{
				id: '3',
				durationInFrames: 75,
				from: 150,
				type: 'text',
				text: 'Remotion',
				color: '#ff0000',
				isDragging: false,
			},
			{
				id: '4',
				durationInFrames: 75,
				from: 225,
				type: 'solid',
				color: 'purple',
				isDragging: false,
			},
		],
		id: '5',
		name: 'Track 1',
	},
];

const initialState: TimelineInitialState = {
	tracks: INITIAL_TRACKS,
	fps: 30,
};

export const App = () => {
	const playerRef = useRef<PlayerRef>(null);
	const timelineContainerSize = useElementSize(timelineContainerRef);
	const timelineContainerWidth = timelineContainerSize?.width;

	return (
		<TimelineProvider
			onChange={(newState) => {
				console.log('New timeline state:', newState);
			}}
			initialState={initialState}
		>
			<TimelineZoomProvider initialZoom={1}>
				<PreviewContainer>
					<VideoPreview loop playerRef={playerRef} />
					<ActionRow playerRef={playerRef} />
				</PreviewContainer>

				<TimelineContainer>
					{timelineContainerWidth ? (
						<TimelineSizeProvider containerWidth={timelineContainerWidth}>
							<Timeline playerRef={playerRef} />
						</TimelineSizeProvider>
					) : null}
				</TimelineContainer>
			</TimelineZoomProvider>
		</TimelineProvider>
	);
};
