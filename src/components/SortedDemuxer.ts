import { Chain, Mapper, Serializer, Logger, Demuxer} from '../';


export class SortedDemuxer extends Chain {
  constructor(...outputs) {
    super(
      new Mapper( obj => outputs.map(k => [k, obj[k]])),
      new Logger('SortedDemuxer/Mapper1'),
      new Serializer(),
      new Logger('SortedDemuxer/Serializer'),
      new Mapper(([key, value]) => ({[key]: value})),
      new Logger('SortedDemuxer/Mapper2'),
      new Demuxer(...outputs)
    );
  }
}