import React from "react";

export default function EpisodeList(props: any): JSX.Element {
  const { episodes, favorites, toggleFav } = props;

  let currentListingSeason: number = 0;

  return episodes.map((episode: any) => {
    let isSepShown: boolean = episode.season !== currentListingSeason;
    if (isSepShown) {
      currentListingSeason = episode.season;
    }

    let isEpisodeFav: boolean = favorites.find(
      (fav: any) => fav.id === episode.id
    )
      ? true
      : false;

    return (
      <>
        {isSepShown ? (
          <h2 key={currentListingSeason} className="separator">
            Season {currentListingSeason}
          </h2>
        ) : null}
        <div key={episode.id} className="episode-wrapper">
          <h2 className="episode-name">{episode.name}</h2>
          <p className="episode-info">
            S{toPrefixed(episode.season)}E{toPrefixed(episode.number)} -{" "}
            <span className="episode-datetime">
              {episode.airdate} {episode.airtime}
            </span>
          </p>
          <img
            className="episode-cover"
            src={episode.image.original}
            alt={"Episode " + episode.number + " Cover"}
          />
          <div
            className="episode-summary"
            dangerouslySetInnerHTML={{ __html: episode.summary }}
          ></div>
          <div className="episode-actions">
            <a href={episode.url} target="blank">
              Watch
            </a>
            <button
              type="button"
              onClick={() => toggleFav(episode)}
              className={"favorite-btn favorite-" + isEpisodeFav}
            >
              {isEpisodeFav ? "Remove Favorite" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </>
    );
  });
}

const toPrefixed = (n: number): string => {
  return n < 10 ? "0" + n : n.toString();
};
